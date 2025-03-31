import React, { useState } from "react";
import { q3values } from "../data/questionnaire";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import Success from "./Success";
import ConsentFormNew from "./ConsentFormNew";
import Q3 from "./Q3";

const FormNew = () => {
  const [step, setStep] = useState(0);
  // const [q2vals, setq2Vals] = useState(q2values);
  const [q3vals, setq3Vals] = useState(q3values);
  const [pInfo, setPInfo] = useState({});
  const [loading, setLoading] = useState(true);

  // go back to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // proceed to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  const finalSubmit = (latestQ3Vals) => {
    // set loading
    setLoading(true);

    // using phno as doc ID
    const docID = pInfo.phno;

    // questionnaire 3
    let q3FirebaseValues = {};

    latestQ3Vals.forEach((values, index) => {
      if (typeof values === "string") {
        q3FirebaseValues[index] = values;
      } else {
        (q3FirebaseValues[index] = {
          slider1: values[0],
          slider2: values[1],
        })
      }
    });

    q3FirebaseValues = { ...pInfo, ...q3FirebaseValues }
    console.log(q3FirebaseValues);

    const questionnaire3Ref = doc(db, "questionnaire3", docID);
    setDoc(questionnaire3Ref, q3FirebaseValues)
      .then((res) => console.log("firebase response for q3", res))
      .catch((e) => console.log("ERROR IN STORING QUESTIONNAIRE 3 VALUES", e));

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="form">
        {
          {
            0: <ConsentFormNew nextStep={nextStep} values={step} initData={pInfo} setInitData={setPInfo} />,
            1: (
              <Q3
                initData={q3vals}
                setInitData={setq3Vals}
                nextStep={nextStep}
                finalSubmit={finalSubmit}
              />
            ),
            2: <Success loading={loading} />,
          }[step]
        }
      </div>
    </div>
  );
};

export default FormNew;
