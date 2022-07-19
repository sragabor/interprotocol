import React from "react";
import Carousel from "../../components/Carousel";

class WhatPeopleSays extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <h3>What People Are <span>Saying</span></h3>
                <h6 className={'max-w-md'}>A stable token for the community, by the community</h6>

                <Carousel/>
            </div>
        );
    }
}

export default WhatPeopleSays;
