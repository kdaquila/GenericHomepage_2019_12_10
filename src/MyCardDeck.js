import React from 'react'
import MyCard from "./MyCard";
import CardDeck from "react-bootstrap/CardDeck";
import image from "./img/Placeholder_200_200.png";

export default function MyCardDeck() {
    return (
        <CardDeck>
            <MyCard imgSrc={image}
                    titleText="Hello"
                    bodyText="This is some supporting text."
                    buttonText="Go somewhere"/>
            <MyCard imgSrc={image}
                    titleText="Hello"
                    bodyText="This is some supporting text."
                    buttonText="Go somewhere"/>
            <MyCard imgSrc={image}
                    titleText="Hello"
                    bodyText="This is some supporting text."
                    buttonText="Go somewhere"/>
        </CardDeck>
    )
}