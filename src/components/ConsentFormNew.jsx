import React, { useState } from 'react'
import { consentQues } from '../data/consent'

const ConsentForm = ({ nextStep, handleChange, values }) => {
    const next = e => {
        e.preventDefault();
        nextStep();
    }

    const [checked, setChecked] = useState(Array(consentQues.length).fill(false))

    const ConsentRow = ({ text, index }) => {
        return <div className="consent-row">
            <label className='consent-text' htmlFor={index}>
                {text}
            </label>
            <input type="checkbox"
                id={index}
                checked={checked[index]}
                onChange={() => setChecked(oldChecked => {
                    var temp = [...oldChecked]
                    temp[index] = !checked[index]
                    return temp
                })}
                required
            />
        </div>
    }

    return (
        <div className='consent-form'>
            <h1>Welcome back</h1>
            <i>Pls enter phone number, is this working</i>
            <br />
            <br />

            <form
                onSubmit={next}
            >
                <input placeholder='phone number' />

                {/* <ol>
                    {consentQues.map((consentQ, key) => (
                        <li key={key}>
                            <ConsentRow text={consentQ} index={key} />
                        </li>
                    ))}
                </ol> */}

                <button
                    type="submit"
                // onClick={next}
                > I consent </button>
            </form>
        </div>
    )
}

export default ConsentForm