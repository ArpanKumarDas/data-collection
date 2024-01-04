import { CircularProgress } from '@mui/material'
import React from 'react'

const Success = ({ loading }) => {
    return (
        <div className="success">

            {
                loading ?
                    <CircularProgress />
                    :
                    <h1>Success!</h1>
            }
            Thank you! your info submitted!
        </div>
    )
}

export default Success