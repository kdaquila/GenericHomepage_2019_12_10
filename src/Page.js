import React from 'react'
import Alert from 'react-bootstrap/Alert'

function Page() {
    return (
        <body className="body">
            <Alert variant="primary">
                This is a primary alert.
            </Alert>
            <Alert variant="secondary">
                This is a secondary alert.
            </Alert>
        </body>
    )
}

export default Page;