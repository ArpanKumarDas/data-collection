import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import TextBox from "./TextBox";
import { ques2 } from "../data/questionnaire";
import slider1gif from "../assets/slider1.gif";
import slider2gif from "../assets/slider2.gif";

const Q2 = ({ prevStep, nextStep, initData, setInitData, finalSubmit }) => {
  const next = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (error.length > 0) {
      return;
    }

    setInitData(stateArray.map((value) => value[0]));
    var answer = window.confirm("Finalise and submit?");
    if (answer) {
      finalSubmit();
      nextStep();
    }
  };

  const prev = (e) => {
    e.preventDefault();
    setInitData(stateArray.map((value) => value[0]));
    prevStep();
  };

  const [error, setError] = useState([]);
  const [overOneSubmit, setSubmit] = useState(false);
  const [value1, setValue1] = useState(initData[0]);
  const [value2, setValue2] = useState(initData[1]);
  const [value3, setValue3] = useState(initData[2]);
  const [value4, setValue4] = useState(initData[3]);
  const [value5, setValue5] = useState(initData[4]);
  const [value6, setValue6] = useState(initData[5]);
  const [value7, setValue7] = useState(initData[6]);
  const [value8, setValue8] = useState(initData[7]);
  const [value9, setValue9] = useState(initData[8]);
  const [value10, setValue10] = useState(initData[9]);
  const [value11, setValue11] = useState(initData[10]);
  const [value12, setValue12] = useState(initData[11]);
  const [value13, setValue13] = useState(initData[12]);
  const [value14, setValue14] = useState(initData[13]);
  const [value15, setValue15] = useState(initData[14]);
  const [value16, setValue16] = useState(initData[15]);
  const [value17, setValue17] = useState(initData[16]);
  const [value18, setValue18] = useState(initData[17]);
  const [value19, setValue19] = useState(initData[18]);
  const [value20, setValue20] = useState(initData[19]);
  const [value21, setValue21] = useState(initData[20]);
  const [value22, setValue22] = useState(initData[21]);
  const [value23, setValue23] = useState(initData[22]);
  const [value24, setValue24] = useState(initData[23]);
  const [value25, setValue25] = useState(initData[24]);
  const [value26, setValue26] = useState(initData[25]);
  const [value27, setValue27] = useState(initData[26]);
  const [value28, setValue28] = useState(initData[27]);
  const [value29, setValue29] = useState(initData[28]);
  const [value30, setValue30] = useState(initData[29]);
  const [value31, setValue31] = useState(initData[30]);
  const [value32, setValue32] = useState(initData[31]);
  const [value33, setValue33] = useState(initData[32]);
  const [value34, setValue34] = useState(initData[33]);
  const [value35, setValue35] = useState(initData[34]);

  const stateArray = [
    [value1, setValue1],
    [value2, setValue2],
    [value3, setValue3],
    [value4, setValue4],
    [value5, setValue5],
    [value6, setValue6],
    [value7, setValue7],
    [value8, setValue8],
    [value9, setValue9],
    [value10, setValue10],
    [value11, setValue11],
    [value12, setValue12],
    [value13, setValue13],
    [value14, setValue14],
    [value15, setValue15],
    [value16, setValue16],
    [value17, setValue17],
    [value18, setValue18],
    [value19, setValue19],
    [value20, setValue20],
    [value21, setValue21],
    [value22, setValue22],
    [value23, setValue23],
    [value24, setValue24],
    [value25, setValue25],
    [value26, setValue26],
    [value27, setValue27],
    [value28, setValue28],
    [value29, setValue29],
    [value30, setValue30],
    [value31, setValue31],
    [value32, setValue32],
    [value33, setValue33],
    [value34, setValue34],
    [value35, setValue35],
  ];

  useEffect(() => {
    console.log("q2");
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // check for errors except last 2
  // since last 2 are optional
  useEffect(() => {
    setError([]);
    for (let idx in stateArray.slice(0, -2)) {
      if (
        (stateArray[idx][0][0][0] === 0 && stateArray[idx][0][0][1] === 100) ||
        (stateArray[idx][0][1][0] === 0 && stateArray[idx][0][1][1] === 100)
      ) {
        setError((prevError) => [...prevError, Number(idx)]);
      }
    }
  }, [...stateArray.map((value) => value[0])]);

  //  [
  //     value1,
  //     value2,
  //     value3,
  //     value4,
  //     value5,
  //     value6,
  //     value7,
  //     value8,
  //     value9,
  //     value10,
  //     value11,
  //     value12,
  //     value13,
  //     value14,
  //     value15,
  //     value16,
  //     value17,
  //     value18,
  //     value19,
  //     value20,
  //     value21,
  //     value22,
  //     value23,
  //     value24,
  //     value25,
  //     value26,
  //     value27,
  //     value28,
  //     value29,
  //     value30,
  //     value31,
  //     value32,
  //     value33,
  //   ]);

  return (
    <div className="q1">
      <button onClick={prev}>Back </button>

      <h1>Questionnaire 2</h1>

      <div className="instructions">
        <h2>Instructions</h2>
        <p className="inst-text">
          This questionnaire is different from the usual questionnaires where
          you either use ticks or circles to denote your response. To fill out
          this questionnaire, you will have to <strong>drag pointers</strong> to
          show the <strong> range of your agreement</strong> with the
          statements.
        </p>

        <p className="inst-text">
          Each question in this questionnaire is followed by two horizontal
          lines that range from 0 to 100. The <u>upper line</u> represents the
          range that you <b>fully agree with</b>. For example, if you think a
          statement is between 55 to 65% true for you, drag the pointers to 55
          and 65 on the upper line.
        </p>

        <img src={slider1gif} alt="" />

        <p className="inst-text">
          Next, the <u>lower line</u> represents the <i>limit</i> to which the
          statement is true for you. So, if you feel that while 55 to 65% best
          describes your agreement with the statement, it is{" "}
          <strong>never less than</strong> 45% true and{" "}
          <strong>never greater than</strong> 70% true, drag the pointers to 45
          and 70 on the lower line.
        </p>

        <img src={slider2gif} alt="" />

        <hr />

        <p className="inst-text">
          <strong>
            The statements below inquire about your habits, feelings, and
            emotions in the english class. Consider each statement carefully.
            Then indicate <i>to what extent</i> it is true for you.
          </strong>
        </p>
      </div>

      {stateArray.map((value, key) => {
        return typeof value[0] === "string" ? (
          <TextBox
            ques={ques2[key]}
            qID={key + 1}
            key={key + 1}
            state={value[0]}
            handleChange={value[1]}
          />
        ) : (
          <Sliders
            ques={ques2[key]}
            qID={key + 1}
            key={key + 1}
            error={error.includes(key) && "error"}
            overOneSubmit={overOneSubmit}
            state={value[0]}
            handleChange={value[1]}
          />
        );
      })}

      {overOneSubmit && error.length > 0 ? (
        <div className="error">
          Kindly provide responses to all the statements before proceeding.
        </div>
      ) : (
        <div></div>
      )}
      <button onClick={next}>Save data</button>
    </div>
  );
};

export default Q2;
