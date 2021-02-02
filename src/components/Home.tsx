import React from 'react'

import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home'>
            <Typography variant='h2' className='homeName'>
                QuizApp
            </Typography>

            <Link to='/quiz' style={{
                textDecoration: 'none',
                display: 'block',
                position: 'relative',
                top: '70%'
            }}>
                <Button
                    variant='contained'
                    size='large'
                    className='homeButton'
                    style={{
                        backgroundColor: '#fff',
                        color: '#41b3a3',
                        borderRadius: '50px'
                    }}>
                    Start Quiz
                </Button>
            </Link>
        </div>

    )
}
