import React from 'react';
import { HomepageWrapper } from './Homepage.style';
import HomepageText from './HomepageText';
import { ReactComponent as DinnerPic } from '../img/dinner.svg';

export default function Homepage() {
    return ( 
        <HomepageWrapper>
            <HomepageText />
            <DinnerPic />
        </HomepageWrapper>
    )
}