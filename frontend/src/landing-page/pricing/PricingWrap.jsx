import React from 'react'
import Hero from './Hero';
import BrokerageCalculator from './BrokerageCalculator';
import Brokerage from './Brokerage';
import AccountCharges from './AccountCharges';

function PricingWrap() {
    return ( <>
    <Hero/>
    <BrokerageCalculator/>
    <Brokerage/>
    <AccountCharges/>
    </> );
}

export default PricingWrap;