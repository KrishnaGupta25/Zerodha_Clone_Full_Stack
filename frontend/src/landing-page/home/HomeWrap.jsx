import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';

function HomeWrap() {
    return ( <>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    </> );
}

export default HomeWrap;