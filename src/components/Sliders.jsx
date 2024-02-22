import React, { memo, useState } from 'react'
import Slider from '@mui/material/Slider'
import { marks1, marks2 } from '../data/questionnaire'
import ErrorIcon from '@mui/icons-material/Error';
import Tooltip from '@mui/material/Tooltip';

const Sliders = ({ qID, ques, state, handleChange, error, overOneSubmit }) => {
    const minDistance = 1

    const checkValues = (oldValues, newValues, sliderId) => {
        if (sliderId === 0) {
            oldValues[1] = [Math.min(newValues[0], oldValues[1][0]), Math.max(newValues[1], oldValues[1][1])]
        }

        if (sliderId === 1) {
            oldValues[1] = [Math.min(newValues[0], oldValues[0][0]), Math.max(newValues[1], oldValues[0][1])]
        }

        return oldValues
    }

    const srija = (event, newValue, sliderId, activeThumb) => {
        handleChange(oldValue => {
            const oldVal = [...oldValue]

            console.log(oldVal[sliderId][1], minDistance, oldVal[sliderId][1] - minDistance)
            if (activeThumb === 0) {
                oldVal[sliderId] = [Math.min(newValue[0], oldVal[sliderId][1] - minDistance), newValue[1]]
            } else {
                oldVal[sliderId] = [newValue[0], Math.max(newValue[1], oldVal[sliderId][0] + minDistance)]
            }

            return checkValues(oldVal, newValue, sliderId)
        })
    }

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleTooltipToggle = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (<label htmlFor="">
        <div className={'question-row ' + (overOneSubmit ? error : '')}>
            <div id={qID} className={"question"}>
                {qID + ". " + ques}
            </div>
            {overOneSubmit && error &&
                <Tooltip title="Kindly provide a response." arrow interactive open={tooltipOpen} onClick={handleTooltipToggle}>
                    <ErrorIcon />
                </Tooltip>
            }
        </div>
        <div className='slider-top'>
            <span className='slider-lables'>False</span>
            <span className='slider-lables'>True</span>
        </div>
        <Slider
            getAriaLabel={() => 'Range'}
            value={state[0]}
            onChange={(event, newValue, activeThumb) =>
                srija(event, newValue, 0, activeThumb)
            }
            valueLabelDisplay="auto"
            marks={marks1}
            disableSwap
        />
        <Slider
            getAriaLabel={() => 'Range'}
            value={state[1]}
            onChange={(event, newValue, activeThumb) =>
                srija(event, newValue, 1, activeThumb)
            }
            valueLabelDisplay="auto"
            marks={marks2}
            disableSwap
        />

        <div className="white-space"></div>
    </label>)
}

export default memo(Sliders)