import React from 'react'
import styled from 'styled-components';
import image from '../images/logo.png'


export default function Footer() {
    return (
        <FooterEl>
            <small>Images come from Pixabay</small>
            <a href="https://pixabay.com/">
                <img className="logo" src={image} alt="logo" />
            </a>
            <p>&copy; Copyright 2020 Andrew Weiss</p>
        </FooterEl>
    )
}

const FooterEl = styled.footer`
    text-align: center;
    small {
        display: block;
        margin-bottom: 0.25rem;
    }
    img {
        max-width: 150px;

    }
`;
