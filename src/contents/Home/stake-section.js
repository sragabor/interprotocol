import React from "react";

import StakeIcon from "../../images/stake-icon.svg"

class StakeSection extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'basis-1/4'}>
                        <img src={StakeIcon} alt="Stake to vote"/>
                    </div>
                    <div className={'basis-3/4 pl-20'}>
                        <h3>Stake to vote</h3>
                        <p>Holders of the Agoric BLD token govern the collateral accepted by Inter Protocol.  Have ideas? Start a conversation on our governance forum.	</p>
                        <a href="/">
                            <button>Start a thread</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default StakeSection;
