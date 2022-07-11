import React from "react";

import video3 from "../../videos/video3.mp4"
import video3webm from "../../videos/video3.webm"
import video3hero from "../../images/video-section-3-hero.png"

class VideoSection3 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-center h-full'}>
                    <div className={'basis-1/2 pr-64'}>
                        <div className={'video-section-content'}>
                            <h2>Boost your BLD</h2>
                            <p>
                                Boost enhances your staked Agoric BLD tokens by allowing you to mint IST against your future staking rewards.
                            </p>
                        </div>
                    </div>
                    <div className={'basis-1/2 h-full'}>
                        <div className={'video-container'}>
                            <video autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={video3hero}>
                                <source src={video3} type='video/mp4;codecs="hvc1"'/>
                                <source src={video3webm} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection3;
