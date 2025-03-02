import React, { useEffect, useState } from "react";
import Sliders from "./Sliders";
import TextBox from "./TextBox";
import { ques3 } from "../data/questionnaire";
import slider1gif from "../assets/slider1.gif";
import slider2gif from "../assets/slider2.gif";

const Q3 = ({ prevStep, nextStep, initData, setInitData, finalSubmit }) => {
    const next = (e) => {
        e.preventDefault();
        setSubmit(true);

        if (error.length > 0) {
            return;
        }

        const updatedValues = stateArray.map((value) => value[0]);
        setInitData(updatedValues)

        var answer = window.confirm("Finalise and submit?");
        if (answer) {
            finalSubmit(updatedValues);
            nextStep();
        }
    };

    //   const prev = (e) => {
    //     e.preventDefault();
    //     setInitData(stateArray.map((value) => value[0]));
    //     prevStep();
    //   };

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
    const [value38, setValue38] = useState(initData[37]);
    const [value39, setValue39] = useState(initData[38]);
    const [value40, setValue40] = useState(initData[39]);
    const [value41, setValue41] = useState(initData[40]);
    const [value42, setValue42] = useState(initData[41]);
    const [value43, setValue43] = useState(initData[42]);
    const [value44, setValue44] = useState(initData[43]);
    const [value45, setValue45] = useState(initData[44]);
    const [value46, setValue46] = useState(initData[45]);
    const [value47, setValue47] = useState(initData[46]);
    const [value48, setValue48] = useState(initData[47]);
    const [value49, setValue49] = useState(initData[48]);
    const [value50, setValue50] = useState(initData[49]);
    const [value51, setValue51] = useState(initData[50]);
    const [value52, setValue52] = useState(initData[51]);
    const [value53, setValue53] = useState(initData[52]);
    const [value54, setValue54] = useState(initData[53]);
    const [value55, setValue55] = useState(initData[54]);
    const [value56, setValue56] = useState(initData[55]);
    const [value57, setValue57] = useState(initData[56]);
    const [value58, setValue58] = useState(initData[57]);
    const [value59, setValue59] = useState(initData[58]);
    const [value60, setValue60] = useState(initData[59]);
    const [value61, setValue61] = useState(initData[60]);
    const [value62, setValue62] = useState(initData[61]);
    const [value63, setValue63] = useState(initData[62]);
    const [value64, setValue64] = useState(initData[63]);
    const [value65, setValue65] = useState(initData[64]);
    const [value66, setValue66] = useState(initData[65]);
    const [value67, setValue67] = useState(initData[66]);
    const [value68, setValue68] = useState(initData[67]);
    const [value69, setValue69] = useState(initData[68]);
    const [value70, setValue70] = useState(initData[69]);
    const [value71, setValue71] = useState(initData[70]);
    const [value72, setValue72] = useState(initData[71]);
    const [value73, setValue73] = useState(initData[72]);
    const [value74, setValue74] = useState(initData[73]);
    const [value75, setValue75] = useState(initData[74]);
    const [value76, setValue76] = useState(initData[75]);
    const [value77, setValue77] = useState(initData[76]);
    const [value78, setValue78] = useState(initData[77]);
    const [value79, setValue79] = useState(initData[78]);
    const [value80, setValue80] = useState(initData[79]);
    const [value81, setValue81] = useState(initData[80]);
    const [value82, setValue82] = useState(initData[81]);
    const [value83, setValue83] = useState(initData[82]);
    const [value84, setValue84] = useState(initData[83]);
    const [value85, setValue85] = useState(initData[84]);
    const [value86, setValue86] = useState(initData[85]);
    const [value87, setValue87] = useState(initData[86]);
    const [value88, setValue88] = useState(initData[87]);
    const [value89, setValue89] = useState(initData[88]);
    const [value90, setValue90] = useState(initData[89]);
    const [value91, setValue91] = useState(initData[90]);
    const [value92, setValue92] = useState(initData[91]);
    const [value93, setValue93] = useState(initData[92]);
    const [value94, setValue94] = useState(initData[93]);
    const [value95, setValue95] = useState(initData[94]);
    const [value96, setValue96] = useState(initData[95]);
    const [value97, setValue97] = useState(initData[96]);
    const [value98, setValue98] = useState(initData[97]);
    const [value99, setValue99] = useState(initData[98]);
    const [value100, setValue100] = useState(initData[99]);
    const [value101, setValue101] = useState(initData[100]);
    const [value102, setValue102] = useState(initData[101]);
    const [value103, setValue103] = useState(initData[102]);
    const [value104, setValue104] = useState(initData[103]);
    const [value105, setValue105] = useState(initData[104]);
    const [value106, setValue106] = useState(initData[105]);
    const [value107, setValue107] = useState(initData[106]);
    const [value108, setValue108] = useState(initData[107]);
    const [value109, setValue109] = useState(initData[108]);
    const [value110, setValue110] = useState(initData[109]);
    const [value111, setValue111] = useState(initData[110]);
    const [value112, setValue112] = useState(initData[111]);
    const [value113, setValue113] = useState(initData[112]);
    const [value114, setValue114] = useState(initData[113]);
    const [value115, setValue115] = useState(initData[114]);
    const [value116, setValue116] = useState(initData[115]);
    const [value117, setValue117] = useState(initData[116]);
    const [value118, setValue118] = useState(initData[117]);
    const [value119, setValue119] = useState(initData[118]);
    const [value120, setValue120] = useState(initData[119]);
    const [value121, setValue121] = useState(initData[120]);
    const [value122, setValue122] = useState(initData[121]);
    const [value123, setValue123] = useState(initData[122]);
    const [value124, setValue124] = useState(initData[123]);
    const [value125, setValue125] = useState(initData[124]);
    const [value126, setValue126] = useState(initData[125]);
    const [value127, setValue127] = useState(initData[126]);
    const [value128, setValue128] = useState(initData[127]);
    const [value129, setValue129] = useState(initData[128]);
    const [value130, setValue130] = useState(initData[129]);
    const [value131, setValue131] = useState(initData[130]);
    const [value132, setValue132] = useState(initData[131]);
    const [value133, setValue133] = useState(initData[132]);
    const [value134, setValue134] = useState(initData[133]);
    const [value135, setValue135] = useState(initData[134]);
    const [value136, setValue136] = useState(initData[135]);
    const [value137, setValue137] = useState(initData[136]);

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
        [value38, setValue38],
        [value39, setValue39],
        [value40, setValue40],
        [value41, setValue41],
        [value42, setValue42],
        [value43, setValue43],
        [value44, setValue44],
        [value45, setValue45],
        [value46, setValue46],
        [value47, setValue47],
        [value48, setValue48],
        [value49, setValue49],
        [value50, setValue50],
        [value51, setValue51],
        [value52, setValue52],
        [value53, setValue53],
        [value54, setValue54],
        [value55, setValue55],
        [value56, setValue56],
        [value57, setValue57],
        [value58, setValue58],
        [value59, setValue59],
        [value60, setValue60],
        [value61, setValue61],
        [value62, setValue62],
        [value63, setValue63],
        [value64, setValue64],
        [value65, setValue65],
        [value66, setValue66],
        [value67, setValue67],
        [value68, setValue68],
        [value69, setValue69],
        [value70, setValue70],
        [value71, setValue71],
        [value72, setValue72],
        [value73, setValue73],
        [value74, setValue74],
        [value75, setValue75],
        [value76, setValue76],
        [value77, setValue77],
        [value78, setValue78],
        [value79, setValue79],
        [value80, setValue80],
        [value81, setValue81],
        [value82, setValue82],
        [value83, setValue83],
        [value84, setValue84],
        [value85, setValue85],
        [value86, setValue86],
        [value87, setValue87],
        [value88, setValue88],
        [value89, setValue89],
        [value90, setValue90],
        [value91, setValue91],
        [value92, setValue92],
        [value93, setValue93],
        [value94, setValue94],
        [value95, setValue95],
        [value96, setValue96],
        [value97, setValue97],
        [value98, setValue98],
        [value99, setValue99],
        [value100, setValue100],
        [value101, setValue101],
        [value102, setValue102],
        [value103, setValue103],
        [value104, setValue104],
        [value105, setValue105],
        [value106, setValue106],
        [value107, setValue107],
        [value108, setValue108],
        [value109, setValue109],
        [value110, setValue110],
        [value111, setValue111],
        [value112, setValue112],
        [value113, setValue113],
        [value114, setValue114],
        [value115, setValue115],
        [value116, setValue116],
        [value117, setValue117],
        [value118, setValue118],
        [value119, setValue119],
        [value120, setValue120],
        [value121, setValue121],
        [value122, setValue122],
        [value123, setValue123],
        [value124, setValue124],
        [value125, setValue125],
        [value126, setValue126],
        [value127, setValue127],
        [value128, setValue128],
        [value129, setValue129],
        [value130, setValue130],
        [value131, setValue131],
        [value132, setValue132],
        [value133, setValue133],
        [value134, setValue134],
        [value135, setValue135],
        [value136, setValue136],
        [value137, setValue137],
    ];

    // const stateArray = tempstateArray.slice(0, 5)

    useEffect(() => {
        console.log("q3");
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

    return (
        <div className="q1">
            {/* <button onClick={prev}>Back </button> */}

            <h1>Questionnaire 3</h1>

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
                        ques={ques3[key]}
                        qID={key + 1}
                        key={key + 1}
                        state={value[0]}
                        handleChange={value[1]}
                        required
                    />
                ) : (
                    <Sliders
                        ques={ques3[key]}
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

export default Q3;
