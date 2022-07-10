import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroSection from "./Home/hero-section";
import StakeSection from "./Home/stake-section";
import VideoSection2 from "./Home/video-section2";

class Fullpage extends React.Component {
    render(){
        return (
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */

                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className={'section hero-section'}>
                                <HeroSection/>
                            </div>
                            <div className={'section stake-section fp-auto-height'}>
                                <StakeSection/>
                            </div>
                            <div className={'section video-section'}>
                                <VideoSection2/>
                            </div>
                            <div className="section">
                                <p>Section 1 (welcome to fullpage.js)</p>
                                <button onClick={() => fullpageApi.moveSectionDown()}>
                                    Click me to move down
                                </button>
                            </div>
                            <div className="section">
                                <p>Section 2</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}


export default Fullpage;
