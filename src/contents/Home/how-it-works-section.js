import React from "react";

import image1 from '../../images/Overcollateralization.svg';
import image2 from '../../images/LiquidationEngine.svg';
import image3 from '../../images/ParityStabilityModule.svg';
import image4 from '../../images/ReservePool.svg';
import image5 from '../../images/Governance.svg';

class HowItWorks extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <h3>How it <span>works</span></h3>
                <h6>Learn about the mechanisms keeping IST stable.</h6>

                <div className={'flex flex-wrap mt-16'}>
                    <div className={'flex flex-col basis-full md:basis-6/12 pr-5'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <div className={'image h-40'}>
                                    <img src={image1} alt="Overcollateralization" className={'max-h-max'}/>
                                </div>
                            </div>
                        </div>
                        <h4>User-Controlled Vaults</h4>
                        <div className={'text'}>
                            Users can deposit their collateral into Vaults and mint IST against their collateral. Users can retrieve their collateral by paying back the IST plus fees.
                        </div>
                    </div>
                    <div className={'flex flex-col basis-full md:basis-6/12 pt-12 md:pt-0 md:pl-5'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <div className={'image h-40'}>
                                    <img src={image2} alt="Liquidation Engine" className={'max-h-max'}/>
                                </div>
                            </div>
                        </div>
                        <h4>Overcollateralizaiton</h4>
                        <div className={'text'}>
                            The Inter Protocol relies on collateral to provide 100% backing for each IST issued. The amount of overcollateralization for each asset is determined by governance based on the riskiness of the asset. A decentralized oracle networks monitors the value of the collateral, and triggers liquidation of the collateral if it falls below the collateralization ratio.
                        </div>
                    </div>
                </div>

                <hr className={'my-16 w-full'}/>

                <div className={'flex flex-wrap mt-16'}>
                    <div className={'flex flex-col basis-full md:basis-1/3 md:px-5 mb-14 md:mb-0'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <div className={'image h-32'}>
                                    <img src={image3} alt="Parity Stability Module" className={'max-h-max'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full md:w-10/12'}>
                            <h5>Parity Stability Module</h5>
                            <div className={'text'}>
                                The Parity Stability Module enables trading between approved stablecoins, such as USDC, and IST. Keeping the IST peg tight.
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col basis-full md:basis-1/3 md:px-5 mb-14 md:mb-0'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <div className={'image h-32'}>
                                    <img src={image4} alt="Reserve Pool" className={'max-h-max'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full md:w-10/12'}>
                            <h5>Reserve Pool</h5>
                            <div className={'text'}>
                                The Reserve owns assets that are accepted as collateral for vaults and provides permanent liquidity to the AMM for liquidations. Assets held by the reserve can also be used to backstop vault liquidation shortfalls.
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col basis-full md:basis-1/3 md:px-5 mb-14 md:mb-0'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex flex-col'}>
                                <div className={'image h-32'}>
                                    <img src={image5} alt="Liquidation Engine" className={'max-h-max'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'w-full md:w-10/12'}>
                            <h5>Governance</h5>
                            <div className={'text'}>
                                Governance determines the approved collateral types and manages the parameters associated with each collateral type based on the risk of the asset.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowItWorks;
