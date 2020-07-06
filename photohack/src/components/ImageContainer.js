import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer'

export default function ImageContainer(props) {
    const { isLoading, imageArray } = props;
    return (
        <ContentWrapper>
            {isLoading && <h2>Loading...</h2>}
            <ImageHolder>
                {!isLoading && imageArray.length > 0 && imageArray.map(image => {
                    return (
                        <div key={image.id} className="image">
                            <img src={image.largeImageURL} />
                        </div>
                    )
                })
                }
            </ImageHolder>
            <Footer />
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    position: absolute;
    top: 500px;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;
    text-align: center;
    .content {
        padding: 1em 1em 3em;
    }
`;

const ImageHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    max-width: 800px;
    margin: 1rem auto;
    justify-content: center;
    align-items: center;
    img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 10px;
    }
`;