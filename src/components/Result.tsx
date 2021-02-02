import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Result = () => {
    return (
        <div className='result'>

            <div className='resultPage'>
                <Typography variant='h3' className='resultText'>
                    Result
                </Typography>

                <div className='resultBox'>
                    <div className='right'>
                        <Typography variant='h3'>07</Typography>
                        <Typography variant='h5'>Right</Typography>
                    </div>
                    <div className='wrong'>
                        <Typography variant='h3'>03</Typography>
                        <Typography variant='h5'>Wrong</Typography>
                    </div>
                </div>
                <div className='attempt'>
                    <Typography variant='h3'>10</Typography>
                    <Typography variant='h5'>Attempt</Typography>
                </div>
            </div>

            <Link to='/' style={{ textDecoration: 'none', display: 'block', position: 'absolute', top: '8vh' }}>
                <Button
                    variant='contained'
                    className='resultButton'
                    size='large'
                    style={{
                        backgroundColor: '#fff',
                        color: '#41b3a3',
                        borderRadius: '50px'
                    }}>
                    Back Home
                </Button>
            </Link>
        </div>
    )
}
