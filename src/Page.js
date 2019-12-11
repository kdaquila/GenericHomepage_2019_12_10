import React from 'react';
import Container from 'react-bootstrap/Container';

import MyNavbar from "./MyNavbar"
import MyJumbotron from "./MyJumbotron"
import MyCardDeck from "./MyCardDeck";
import MyFooter from "./MyFooter";

function Page() {
    return [
        <Container>
            <MyNavbar/>
            <MyJumbotron/>
            <MyCardDeck/>
        </Container>,
        <MyFooter/>
    ]
}

export default Page;