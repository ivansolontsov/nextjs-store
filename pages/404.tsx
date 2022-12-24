import React from 'react'
import Container from '../components/Container'

type Props = {}

const ErrorNotFound = (props: Props) => {
    return (
        <h1 style={{width: '100%', textAlign: 'center', padding: '300px 0px'}}>
            Error 404, Not Found
        </h1>
    )
}

export default ErrorNotFound