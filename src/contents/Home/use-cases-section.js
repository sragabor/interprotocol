import React from "react";

import useCaseImage1 from '../../images/use-case-image1.png';
import useCaseImage2 from '../../images/use-case-image2.png';

class UseCasesSection extends React.Component {
    render() {
        return (
            <div>
                <div className={'container container-slim'}>
                    <div className={'flex flex-row items-end justify-between'}>
                        <div className={'basis-auto'}>
                            <h3>Use <span>Cases</span></h3>
                        </div>
                    </div>
                </div>
                <div className={'container'}>
                    <div className={'use-case-columns'}>
                        <div className={'flex flex-row flex-wrap mt-12'}>
                            <div className={'flex flex-col basis-full md:basis-6/12'}>
                                <div className={'use-case use-case-left'}>
                                    <div className={'use-case-container'}>
                                        <div className={'use-case-inner'}>
                                            <div className={'image'}>
                                                <img src={useCaseImage1} alt="A stable token for IBC"/>
                                            </div>
                                            <h3>A stable <br/> token for IBC</h3>
                                            <div className={'text mt-5'}>
                                                The interchain ecosystem needs a stable token backed by a broad spectrum of available IBC assets. $IST solves this by being available to all available chains in the growing IBC ecosystem.
                                            </div>
                                            <a href="https://inter.trade/whitepaper">
                                                <button className={'mt-8'}>Learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col basis-full md:basis-6/12'}>
                                <div className={'use-case use-case-right'}>
                                    <div className={'use-case-container'}>
                                        <div className={'use-case-inner'}>
                                            <div className={'flex image items-end'}>
                                                <img src={useCaseImage2} alt="Fee token for Agoric"/>
                                            </div>
                                            <h3>Fee token for Agoric</h3>
                                            <div className={'text mt-5'}>
                                                IST is the native fee token for the Agoric chain and provides stability for the Agoric cryptoeconomy
                                            </div>
                                            <a href="https://inter.trade/whitepaper">
                                                <button className={'mt-8'}>Learn more</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UseCasesSection;
