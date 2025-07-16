import React from 'react'

function Stats() {
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-lg-5 col-sm-12 mt-5 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-lg-7 col-sm-12 mt-3 p-5 ">
                    <img className="img-fluid" src="/assets/ecosystem.png" alt="" />
                    <div className="text-center p-5">
                        <a className="mx-3 text-decoration-none" href="">Explore our products &rarr;</a>
                        <a className="text-decoration-none" href="">Try Kite demo &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;