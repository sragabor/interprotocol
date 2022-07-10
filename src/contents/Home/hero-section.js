import React from "react";

class HeroSection extends React.Component {
    render() {
        return (
                <div className={'container'}>
                    <h1>The Stable Token for Cosmos $IBC</h1>
                    <div className={'text'}>
                        Introducing $IST, the Inter Stable Token powered by Inter Protocol and backed by assets such as $ATOM and $OSMO.
                    </div>
                    <a href="/">
                        <button>Stay updated</button>
                    </a>
                </div>
        );
    }
}

export default HeroSection;
