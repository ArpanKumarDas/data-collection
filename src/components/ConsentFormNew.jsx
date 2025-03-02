import React, { useState } from 'react'
import { consentQues } from '../data/consent'

const ConsentForm = ({ nextStep, values, initData, setInitData }) => {
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

    const handleChange = (e) => {
        setInitData({
            ...initData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='consent-form'>
            <h1>Welcome back</h1>
            <i>Please enter the details you provided for the earlier questionnaires</i>
            <br />
            <br />

            <form
                onSubmit={next}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={initData.name ?? ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Phone number:
                    <input
                        type="tel"
                        name="phno"
                        value={initData.phno ?? ""}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        title="Please enter 10 digits"
                        required
                    />
                </label>
                <label>
                    Email ID:
                    <input
                        type="email"
                        name="mail"
                        value={initData.mail ?? ""}
                        onChange={handleChange}
                        placeholder="username@email.com"
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        title="Please match the format: username@email.com (make sure all characters are in lowercase)"
                        required
                    />
                </label>

                <button
                    type="submit"
                >
                    {" "}
                    Proceed to Questionnaire
                </button>
            </form>
        </div>
    )
}

export default ConsentForm