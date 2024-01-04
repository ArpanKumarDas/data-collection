import React, { useState } from 'react'
import { q1values, q2values } from '../data/questionnaire'

import { setDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

import PersonalInfo from './PersonalInfo';
import Q1 from './Q1';
import Q2 from './Q2';
import Success from './Success';
import ConsentForm from './ConsentForm';

const Form = () => {
    const [step, setStep] = useState(0)
    const [q1vals, setq1Vals] = useState(q1values)
    const [q2vals, setq2Vals] = useState(q2values)
    const [pInfo, setPInfo] = useState({ 'Consent': 'Yes' })
    const [loading, setLoading] = useState(true)

    // go back to previous step
    const prevStep = () => {
        setStep(step - 1);
    }

    // proceed to the next step
    const nextStep = () => {
        setStep(step + 1);
    }

    const finalSubmit = () => {
        // set loading
        setLoading(true)

        // using phno as doc ID
        const docID = pInfo.phno


        // personal info
        const dataCollectionRef = doc(db, "user-details", docID)
        setDoc(dataCollectionRef, pInfo)
            .then(res => console.log("firebase response", res))
            .catch(e => console.log("ERROR IN STORING PERSONAL DATA", e))

        // questionnaire 1
        let q1FirebaseValues = {}
        q1vals.map((values, index) => (
            q1FirebaseValues["q" + index] = {
                "slider1": values[0],
                "slider2": values[1]
            }
        ))
        console.log(q1FirebaseValues)

        const questionnaire1Ref = doc(db, "questionnaire1", docID)
        setDoc(questionnaire1Ref, q1FirebaseValues)
            .then(res => console.log("firebase response for q1", res))
            .catch(e => console.log("ERROR IN STORING QUESTIONNAIRE 1 VALUES", e))

        // questionnaire 2
        let q2FirebaseValues = {}
        q1vals.map((values, index) => (
            q2FirebaseValues["q" + index] = {
                "slider1": values[0],
                "slider2": values[1]
            }
        ))
        console.log(q1FirebaseValues)

        const questionnaire2Ref = doc(db, "questionnaire2", docID)
        setDoc(questionnaire2Ref, q2FirebaseValues)
            .then(res => console.log("firebase response for q2", res))
            .catch(e => console.log("ERROR IN STORING QUESTIONNAIRE 2 VALUES", e))

        setLoading(false)
    }

    return (
        <div className="container">
            <div className="form">
                {
                    {
                        0: <ConsentForm
                            nextStep={nextStep}
                            values={step}
                        />,
                        1: <PersonalInfo
                            nextStep={nextStep}
                            values={step}
                            initData={pInfo}
                            setInitData={setPInfo}
                        />,
                        2: <Q1
                            prevStep={prevStep}
                            nextStep={nextStep}
                            initData={q1vals}
                            setInitData={setq1Vals}
                            values={step}
                        />,
                        3: <Q2
                            prevStep={prevStep}
                            nextStep={nextStep}
                            initData={q2vals}
                            setInitData={setq2Vals}
                            values={step}
                            finalSubmit={finalSubmit}
                        />,
                        4: <Success
                            loading={loading}
                        />
                    }[step]
                }
            </div>
        </div>
    )
}

export default Form