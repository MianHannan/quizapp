import React from 'react'

import { Typography, Button, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Quiz = () => {
    return (
        <div className='quiz'>

            <div className='quizBar'>
                <span className='quizNumbers'>4/10</span>
                <span className='quizStatus'>
                    <span className='quizRight'>02</span>
                    <span className='quizWrong'>01</span>
                </span>
            </div>

            <div className='quizLeft'>
                <CircularProgress
                    variant='determinate'
                    value={70}
                    size={50}
                    style={{ color: '#41b3a3' }}
                />
                <Typography variant='h6' >
                    6
                </Typography>
            </div>

            <Typography className='quizTitle' variant='caption'>
                Science
            </Typography>

            <Typography variant='h6' className='quizQuestion'>
                When did you started working?
            </Typography>

            <Button
                variant='contained'
                className='quizChoice'
                style={{
                    color: '#fff',
                    backgroundColor: '#7fc7bb',
                    display: 'block',
                    width: '80%',
                    margin: '10px auto',
                    borderRadius: '50px'
                }}>
                An Hour Ago
            </Button>

            <Button
                variant='contained'
                className='quizChoice'
                style={{
                    color: '#fff',
                    backgroundColor: '#7fc7bb',
                    display: 'block',
                    width: '80%',
                    margin: '10px auto',
                    borderRadius: '50px'
                }}>
                A Long Ago
            </Button>

            <Button
                variant='contained'
                className='quizChoice'
                style={{
                    color: '#fff',
                    backgroundColor: '#7fc7bb',
                    display: 'block',
                    width: '80%',
                    margin: '10px auto',
                    borderRadius: '50px'
                }}>
                Since i Born
            </Button>

            <Button
                variant='contained'
                className='quizChoice'
                style={{
                    color: '#fff',
                    backgroundColor: '#7fc7bb',
                    display: 'block',
                    width: '80%',
                    margin: '10px auto',
                    borderRadius: '50px'
                }}>
                Dont Know
            </Button>

            <Button
                variant='contained'
                className='quizChoice'
                style={{
                    color: '#fff',
                    backgroundColor: '#41b3a3',
                    margin: '5px auto',
                    borderRadius: '50px',
                    // display: 'none'
                }}>
                Next
            </Button>

            <Link to='/result' style={{ textDecoration: 'none', display: 'block' }}>
                <Button
                    variant='contained'
                    className='homeButton'
                    style={{
                        backgroundColor: '#41b3a3',
                        color: '#fff',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        // display: 'none'
                    }}>
                    Show Result
                </Button>
            </Link>

        </div>
    )
}
