import React from 'react';
import { NavBar } from './Navigation.style';
import { ReactComponent as LinkedIn } from '../img/linkedin.svg';
import { ReactComponent as GitHub } from '../img/github.svg';

export default function NavigationBar() {
    return (
        <NavBar>
            <ul>
                <li>
                    <p>Restaurant Finder</p>
                </li>
                <li>
                    <a 
                        href='https://github.com/LuriMatos'
                        className='icon-button'
                        target="_blank"
                        rel="noopener noreferrer">
                        <GitHub />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/lucasmatosdl/" 
                        className='icon-button'
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </li>
            </ul>
        </NavBar>    
    )
}