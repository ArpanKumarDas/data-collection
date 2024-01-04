import React, { useEffect, useState } from 'react'
import Sliders from './Sliders'
import { ques2 } from '../data/questionnaire'

const Q2 = ({ prevStep, nextStep, initData, setInitData, finalSubmit }) => {
    const next = e => {
        e.preventDefault()
        setInitData(stateArray.map(value => value[0]))
        var answer = window.confirm("Finalise and submit?");
        if (answer) {
            finalSubmit()
            nextStep()
        }
    }

    const prev = e => {
        e.preventDefault()
        setInitData(stateArray.map(value => value[0]))
        prevStep()
    }

    const [value1, setValue1] = useState(initData[0])
    const [value2, setValue2] = useState(initData[1])
    const [value3, setValue3] = useState(initData[2])
    const [value4, setValue4] = useState(initData[3])
    const [value5, setValue5] = useState(initData[4])
    const [value6, setValue6] = useState(initData[5])
    const [value7, setValue7] = useState(initData[6])
    const [value8, setValue8] = useState(initData[7])
    const [value9, setValue9] = useState(initData[8])
    const [value10, setValue10] = useState(initData[9])
    const [value11, setValue11] = useState(initData[10])
    const [value12, setValue12] = useState(initData[11])
    const [value13, setValue13] = useState(initData[12])
    const [value14, setValue14] = useState(initData[13])
    const [value15, setValue15] = useState(initData[14])
    const [value16, setValue16] = useState(initData[15])
    const [value17, setValue17] = useState(initData[16])
    const [value18, setValue18] = useState(initData[17])
    const [value19, setValue19] = useState(initData[18])
    const [value20, setValue20] = useState(initData[19])
    const [value21, setValue21] = useState(initData[20])
    const [value22, setValue22] = useState(initData[21])
    const [value23, setValue23] = useState(initData[22])
    const [value24, setValue24] = useState(initData[23])
    const [value25, setValue25] = useState(initData[24])
    const [value26, setValue26] = useState(initData[25])
    const [value27, setValue27] = useState(initData[26])
    const [value28, setValue28] = useState(initData[27])
    const [value29, setValue29] = useState(initData[28])
    const [value30, setValue30] = useState(initData[29])
    const [value31, setValue31] = useState(initData[30])
    const [value32, setValue32] = useState(initData[31])
    const [value33, setValue33] = useState(initData[32])

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
        [value33, setValue33]
    ]

    useEffect(() => {
        console.log("q2");
    })

    return (
        <div className="q1">
            <button onClick={prev}>Back </button>

            <h1>Questionnaire 2</h1>

            {stateArray.map((value, key) => (
                <Sliders
                    ques={ques2[key]}
                    qID={key + 1}
                    key={key + 1}
                    state={value[0]}
                    handleChange={value[1]}
                />
            ))}

            {/* <button onClick={next}>Submit</button> */}
            <button onClick={next}>Save data</button>
        </div>

    )
}

export default Q2