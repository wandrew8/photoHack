import React, { useState } from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function ImageContainer(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const { isLoading, imageArray, page, setPage } = props;
    return (
        <ContentWrapper>
            {isLoading && (
                <div>
                    <h2>Loading...</h2>
                    <FontAwesomeIcon icon={faSpinner} size="3x" spin />
                </div>
                )}                
            <ImageHolder>
                {!isLoading && imageArray.length > 0 && imageArray.map((image, index) => {
                    return (
                        <div key={image.id} onClick={() => { setIsOpen(true); setPhotoIndex(index)}} className="image">
                            <img src={image.largeImageURL} />
                            <div className="stats">
                                <img src={image.userImageURL} alt="avatar" />
                                <p>{image.user}</p>
                            </div>
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
                {/* <div className="pure-button-group pagination" role="group" aria-label="...">
                    <button onClick={() => setPage(1)} className={page === 1 ? "pure-button pure-button-active" : "pure-button"}>1</button>
                    <button onClick={() => setPage(2)} className={page === 2 ? "pure-button pure-button-active" : "pure-button"}>2</button>
                    <button onClick={() => setPage(3)} className={page === 3 ? "pure-button pure-button-active" : "pure-button"}>3</button>
                    <button onClick={() => setPage(4)} className={page === 4 ? "pure-button pure-button-active" : "pure-button"}>4</button>
                    <button onClick={() => setPage(5)} className={page === 5 ? "pure-button pure-button-active" : "pure-button"}>5</button>
                </div> */}
            <Footer />
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    position: absolute;
    top: 400px;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;
    text-align: center;
    .content {
        padding: 1em 1em 3em;
    }
    .pagination {
        margin: 1rem;
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
    .image {
        position: relative;
        &:hover .stats{
        opacity: 1;
    }
    }
    img {
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 10px;
        cursor: pointer;
        transition: 200ms linear;
        &:hover {
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        }
        
    }
    .stats {
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-gap: 0.25rem;
        align-items: center;
        background-color: rgba(0,0,0,0.7);
        padding: 0rem 0.5rem;
        position: absolute; 
        bottom: 7px;
        height: 50px;
        border-radius: 0px 0px 10px 10px;
        z-index: 100;
        width: 100%;
        opacity: 0;
        transition: 200ms linear;
        img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            object-fit: cover;
        }
        p {
            font-size: 0.8rem;
            color: white;
            text-transform: uppercase;
        }
    }
   
`;