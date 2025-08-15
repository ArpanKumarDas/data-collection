import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import TextBox from "./TextBox";
import { ques1 } from "../data/questionnaire";
import slider1gif from "../assets/slider1.gif";
import slider2gif from "../assets/slider2.gif";

const Q1 = ({ prevStep, nextStep, initData, setInitData }) => {
  const next = (e) => {
    e.preventDefault();
    setSubmit(true);

    if (error.length > 0) {
      return;
    }

    setInitData(stateArray.map((value) => value[0]));
    nextStep();
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
  const [value36, setValue36] = useState(initData[35]);
  const [value37, setValue37] = useState(initData[36]);

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
    [value36, setValue36],
    [value37, setValue37],
  ];

  useEffect(() => {
    console.log("q1");
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

  //[
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
  //     value34,
  //     value35,
  //     value36,
  //     value37,
  //   ]);

  return (
    <div className="q1">
      <button onClick={prev}> Back </button>

      <h1>Questionnaire 1</h1>

      <div className="instructions">
        <h2 style={{ paddingBottom: '0px', marginBottom: '0px' }}>Instructions</h2>

        <p className="inst-text">
          This questionnaire is different from the usual questionnaires, where
          you either use ticks or circles to denote your response.

          This questionnaire uses a unique response system to capture not just
          your agreement, but also how much your feelings vary.

          For each statement, you'll see two horizontal lines ranging from 0 to 100.
          To fill out this questionnaire, you will have to drag pointers to show the range of your agreement with the statements.
        </p>

        <p className="inst-text">
          <h4 style={{ padding: '0px', margin: '0px' }}> UPPER LINE: Your Most Typical Agreement </h4>
          This represents your core or most common level of agreement with the statement.
          Drag the two pointers to show the range where you usually fall.
          <br />
          <br />
          <i>
            Example: If a statement is most typically 55-65% true for you, set the pointers at 55 and 65.
          </i>
        </p>

        <img src={slider1gif} alt="" />


        <p className="inst-text">
          <h4 style={{ padding: '0px', margin: '0px' }}>LOWER LINE: Your Range of Variation</h4>
          This captures the full spectrum of how true this statement can be for you across
          different situations, moods, stress levels, or time periods.
          Read the statement again and think about a time you felt this way: in your experience,
          what was the lowest and highest intensity at which you felt it?
          <br />
          <br />
          <i>Example: While your typical agreement with the statement is 55-65%, you recognise that on some days/in some situations,
            your agreement with this statement would be as low as 45% while on other days/at other times, your agreement would be as high as 70%.
            If so, set the pointers at 45 and 70.
          </i>
        </p>

        <img src={slider2gif} alt="" />

        <p className="inst-text">

          <h4 style={{ padding: '0px', margin: '0px' }}>Why Both Lines Matter: </h4>
          Anxiety isn't constant - it changes based on stress, situations, health, etc.
          <br />
          The upper line shows your "normal" state; the lower line shows your full spectrum of possible responses.
          This helps us understand both your typical anxiety AND how much it varies.
          <br />
          <br />
          <i>
            Remember: The lower line should always be wider than (or equal to) the upper line, since it represents your complete range of possible responses.
          </i>
        </p>

        <hr style={{ padding: '0px', margin: '0px', marginBottom: '20px' }} />

        <h4 style={{ padding: '0px', margin: '0px' }}>
          The statements below inquire about your habits, feelings, and
          emotions. Consider each statement carefully. Then indicate <i>to what extent it is true for you. </i>
        </h4>
      </div>

      {stateArray.map((value, key) => {
        return typeof value[0] === "string" ? (
          <TextBox
            ques={ques1[key]}
            qID={key + 1}
            key={key + 1}
            state={value[0]}
            handleChange={value[1]}
            required
          />
        ) : (
          <Sliders
            ques={ques1[key]}
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
      <button onClick={next}>Proceed to Questionnaire 2 </button>
    </div>
  );
};

export default Q1;
