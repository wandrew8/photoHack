import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer'

export default function ImageContainer() {
    return (
        <ContentWrapper>
            <div class="content">
                <h2 class="content-head is-center">Images</h2>
            </div>
            <Footer />
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    position: absolute;
    top: 350px;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;
    text-align: center;
    .content {
        padding: 1em 1em 3em;
    }
`;