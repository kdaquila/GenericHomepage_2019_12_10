import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import image from './img/Placeholder_1000_666.png'

export default function MyJumbotron() {
    return (
        <Jumbotron style={{
            backgroundImage: 'url(' + image + ')',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "333px"}}>
            <h1>This is an important heading</h1>
            <p>
                This is some supporting text.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}