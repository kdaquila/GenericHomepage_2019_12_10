import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MyCard(props) {
    return (
        <Card>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title>{props.titleText}</Card.Title>
                <Card.Text>{props.bodyText}</Card.Text>
                <Button variant="primary">{props.buttonText}</Button>
            </Card.Body>
        </Card>
    )
}