import React from 'react';
import { TextWrapper } from './HomepageText.style';

export default function HomepageText() {
    return(
        <TextWrapper>
            <h1>This is an app made for lovers! </h1>
            <h2>Just share your position and press start:</h2>
            <button>
                Start now!
            </button>
            <p>This project is made by Lucas Matos. If something isn´t working, please 
                <a href="https://www.linkedin.com/in/lucasmatosdl/" 
                    target="_blank" 
                    rel="noopener noreferrer"> contact me!</a>
            </p>
        </TextWrapper>
    )
}