import React from "react";
import Videos from "../../components/Videos";

class WhatPeopleSays extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <div className={'relative'}>
                    <h3>What People Are <span>Saying</span></h3>
                    <h6 className={'max-w-md'}>A stable token for the community, by the community</h6>

                    <Videos/>
                </div>
            </div>
        );
    }
}

export default WhatPeopleSays;
