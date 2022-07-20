import React from "react";

class VoiceSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'basis-full'}>
                        <div className={'voice-container'}>
                            <div className={'flex flex-wrap items-center justify-between'}>
                                <div className={'basis-full md:basis-1/4'}>
                                    <h3>Your Voice <span>Matters</span></h3>
                                </div>
                                <div className={'basis-full md:basis-6/12'}>
                                    <p>The Inter Protocol is a community-driven project governed by Agoric BLD token holders (the BLDer DAO). Owning BLD enables voting on governance proposals such as choosing the next collateralized asset to improvements to the protocol.</p>
                                    <a href="https://commonwealth.im/agoric/discussions/Inter" target={'_blank'} rel={'noreferrer'}>
                                        <button className={'mt-9'}>Participate in Governance</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VoiceSection;
