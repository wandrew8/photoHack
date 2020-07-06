import React, { useState } from 'react';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import { colorData } from '../colorData'

export default function Main() {
    const [searchType, setSearchType] = useState('keyword');
    const [searchKeyword, setSearchKeyword] = useState('');

    const searchByKeyword = (e) => {
        e.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchKeyword}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        })
        .catch(err => console.log(err))
        }
    
    return (
        <React.Fragment>
            <SplashContainer>
                <div class="splash">
                    <h1 class="splash-head">Stock Image Finder</h1>
                    <p class="splash-subhead">
                        Search Hundreds of Stock Images for the perfect One
                    </p>
                    <button onClick={() => (setSearchType('keyword'))} class="pure-button">Keyword</button>
                    <button onClick={() => (setSearchType('color'))} class="pure-button">Color</button>
                    <button onClick={() => (setSearchType('category'))} class="pure-button">Category</button>
                {
                    searchType === "keyword" && 
                    <form onSubmit={searchByKeyword} class="pure-form">
                        <fieldset>
                            <input 
                                value={searchKeyword} 
                                onChange={(e) => (setSearchKeyword(e.target.value))} 
                                type="text" 
                                placeholder="Search by keyword" />
                            <button type="submit" class="pure-button">Search</button>
                        </fieldset>
                    </form>
                }
                {
                    searchType === "color" && 
                    <Colors>
                        {colorData.map(color => {
                            return (
                                <div className="color">
                                    <img src={color.image} alt={color.color} />
                                    <h3>{color.text}</h3>
                                </div>
                            )
                        })}
                    </Colors>
                }
                </div>
            </SplashContainer>
            <ImageContainer />
        </React.Fragment>

    )
}

const SplashContainer = styled.div`
    background: #1f8dd6;
    z-index: 1;
    width: 100%;
    height: 350px;
    top: 0;
    left: 0;
    position: fixed !important;
    .splash {
        width: 80%;
        height: 80%;
        margin: auto;
        position: absolute;
        top: 0px; left: 0; bottom: 0; right: 0;
        text-align: center;
        text-transform: uppercase;
    }
    .splash-head {
        font-weight: bold;
        color: white;
        border: 3px solid white;
        padding: 1em 1.6em;
        font-weight: 100;
        border-radius: 5px;
        line-height: 1em;
    }
    .splash-subhead {
        color: white;
        letter-spacing: 0.05em;
        opacity: 0.8;
    }
    button {
        margin: 0.5rem;
        color: #222;
        font-family: 'Karla', sans-serif;
    }
`;

const Colors = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 0.5rem;
    max-width: 500px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    .color {
        width: 70px;
        height: 70px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
            cursor: pointer;
            transition: 200ms linear;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;