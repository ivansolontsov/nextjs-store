import React from 'react'
import Container from '../components/Container'

type Props = {}

const ErrorNotFound = (props: Props) => {
    return (
        <div style={{ width: '100%', textAlign: 'center', padding: '300px 0px' }}>
            <h1 >
                Error 404
            </h1>
            <h3>
                Page Not Found
            </h3>
        </div>
    )
}

export default ErrorNotFound