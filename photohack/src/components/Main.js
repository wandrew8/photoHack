import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';
import { colorData } from '../colorData'

export default function Main() {
    const [searchType, setSearchType] = useState('keyword');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchColor, setSearchColor] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [searchCategory, setSearchCategory] = useState('');

    useEffect(() => {
        console.log(searchColor)
        searchByColor();
      }, [searchColor]);

    const searchByKeyword = (e) => {
        setIsLoading(true)
        e.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchKeyword}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsLoading(false);
            setSearchKeyword('');
            setImageArray(data.hits);
        })
        .catch(err => console.log(err))
    }

    const searchByColor = () => {
        setIsLoading(true)
        fetch(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&colors=${searchColor}&editors_choice=true&safesearch=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsLoading(false);
            setImageArray(data.hits);
        })
        .catch(err => console.log(err))
    }

    const searchByCategory = (e) => {
        e.preventDefault();
        setIsLoading(true)
        fetch(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&category=${searchCategory}&safesearch=true&pretty=true`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setIsLoading(false);
            setImageArray(data.hits);
        })
        .catch(err => console.log(err))
    }
    
    return (
        <React.Fragment>
            <SplashContainer>
                <div className="splash">
                    <h1 className="splash-head">Stock Image Finder</h1>
                    <p className="splash-subhead">
                        Search Hundreds of Stock Images for the perfect One
                    </p>
                    <button onClick={() => (setSearchType('keyword'))} className="pure-button">Keyword</button>
                    <button onClick={() => (setSearchType('color'))} className="pure-button">Color</button>
                    <button onClick={() => (setSearchType('category'))} className="pure-button">Category</button>
                {
                    searchType === "keyword" && 
                    <form onSubmit={searchByKeyword} className="pure-form">
                        <fieldset>
                            <input 
                                value={searchKeyword} 
                                onChange={(e) => (setSearchKeyword(e.target.value))} 
                                type="text" 
                                placeholder="Search by keyword" />
                            <button type="submit" className="pure-button">Search</button>
                        </fieldset>
                    </form>
                }
                {
                    searchType === "color" && 
                    <Colors>
                        {colorData.map(color => {
                            return (
                                <div 
                                    key={color.color}
                                    onClick={() => (setSearchColor(color.color))}
                                    className="color">
                                    <img src={color.image} alt={color.color} />
                                    <p className="colorText">{color.text}</p>
                                </div>
                            )
                        })}
                    </Colors>
                }
                {
                    searchType === "category" && 
                    <form onSubmit={searchByCategory} className="pure-form">
                        <fieldset>
                            <select value={searchCategory} onChange={(e) => (setSearchCategory(e.target.value))}>
                                <option value="">Search by Category</option>
                                <option value="backgrounds">Backgrounds</option>
                                <option value="fashion">Fashion</option>
                                <option value="nature">Nature</option>
                                <option value="science">Science</option>
                                <option value="education">Education</option>
                                <option value="feelings">Feelings</option>
                                <option value="health">Health</option>
                                <option value="people">People</option>
                                <option value="religion">Religion</option>
                                <option value="places">Places</option>
                                <option value="industry">Industry</option>
                                <option value="computer">Computer</option>
                                <option value="sports">Sports</option>
                                <option value="transportation">Transportation</option>
                                <option value="travel">Travel</option>
                                <option value="buildings">Buildings</option>
                                <option value="business">Business</option>
                                <option value="music">Music</option>
                                <option value="animals">Animals</option>
                                <option value="computer">Computer</option>
                            </select>
                            <button type="submit" className="pure-button">Search</button>
                        </fieldset>
                    </form>
                }
                </div>
            </SplashContainer>
            <ImageContainer imageArray={imageArray} isLoading={isLoading}/>
        </React.Fragment>

    )
}

const SplashContainer = styled.div`
    background: #1f8dd6;
    z-index: 1;
    width: 100%;
    height: 500px;
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
        padding: 0.5em 1.6em;
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
    grid-gap: 1rem;
    max-width: 500px;
    margin: 1rem auto;
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
    .colorText {
        margin: 0.5rem auto;
        font-size: 12px;
        color: white;
    }
`;