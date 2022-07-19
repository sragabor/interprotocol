import React from "react";

class VoiceSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'basis-full'}>
                        <div className={'voice-container'}>
                            <div className={'flex items-center justify-between'}>
                                <div className={'flex flex-col basis-1/4'}>
                                    <h3>Your Voice <span >Matters</span></h3>
                                </div>
                                <div className={'basis-6/12'}>
                                    <p>Inter Protocol is a community-driven project governed by Agoric BLD token holders. BLD enables you to vote on key governance proposals from choosing the next collateralized asset to defining debt ratios.</p>
                                    <button className={'mt-9'}>Participate in Governance</button>
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
