import React, { useState } from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default function ImageContainer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const { isLoading, imageArray } = props;
    return (
        <ContentWrapper>
            {isLoading && <h2>Loading...</h2>}
            <ImageHolder>
                {!isLoading && imageArray.length > 0 && imageArray.map((image, index) => {
                    return (
                        <div key={image.id} onClick={() => { setIsOpen(true); setPhotoIndex(index)}} className="image">
                            <img src={image.largeImageURL} />
                        </div>
                    )
                })
                }
                {isOpen && (
                    <Lightbox
                        mainSrc={imageArray[photoIndex].largeImageURL}
                        nextSrc={imageArray[(photoIndex + 1) % imageArray.length].largeImageURL}
                        prevSrc={imageArray[(photoIndex + imageArray.length - 1) % imageArray.length].largeImageURL}
                        onCloseRequest={() => (setIsOpen(false))}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + imageArray.length - 1) % imageArray.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % imageArray.length)
                        }
                    />
                )}
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
        cursor: pointer;
    }
`;