import React from "react";

class WhatsDifferentSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <div className={'flex flex-row items-end justify-between'}>
                    <div className={'basis-1/4'}>
                        <h3>What's <span className={'block'}>different?</span></h3>
                    </div>
                    <div className={'basis-auto pb-3.5 hidden md:flex'}>
                        <a href="https://agoric.com/economy" target={'_blank'} rel={'noreferrer'}>
                            <button>Learn About BLD</button>
                        </a>
                    </div>
                </div>
                <div className={'flex flex-row'}>
                    <div className={'flex flex-col basis-full inner-text'}>
                        <p>
                            Inter Protocol is a community-organized, decentralized application launching on the Agoric chain that implements the Inter Stable Token (IST). As an overcollateralized, cryptocurrency-backed decentralized stable token, IST is designed to maintain parity with the US dollar (USD) for broad accessibility. Users are able to mint IST by creating a Vault, using the Parity Stability Module (PSM), or engaging with BLD Boost.
                            Furthermore, holders of Agoric BLD (‘the BLDer DAO’) have sovereign governance over the Inter Protocol. The BLDer DAO will elect a technical economic committee to manage the Inter Protocol and propose changes  (for example, which IBC-enabled cryptocurrency should be used as collateral to support IST minting, such as ATOM, OSMO, SCRT).
                        </p>
                    </div>
                </div>
                <div className={'flex flex-row'}>
                    <div className={'flex flex-col basis-auto block md:hidden pt-7'}>

                        <a href="https://agoric.com/economy" target={'_blank'} rel={'noreferrer'}>
                            <button>Learn About BLD</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WhatsDifferentSection;
