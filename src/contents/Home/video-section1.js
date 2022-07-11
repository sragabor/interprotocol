import React from "react";

import video1 from "../../videos/video1.mp4"
import video1webm from "../../videos/video1.webm"
import video1hero from "../../images/video-section-1-hero.png"

class VideoSection1 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-center h-full'}>
                    <div className={'basis-1/2 pr-64'}>
                        <div className={'video-section-content'}>
                            <h2>Create a vault</h2>
                            <p>
                                Create a vault, mint IST, and trade in the $10B+ interchain market while holding onto your Cosmos assets.
                            </p>
                        </div>
                    </div>
                    <div className={'basis-1/2 h-full'}>
                        <div className={'video-container'}>
                            <video autoPlay={false} preload={'none'} loop={true} playsInline={true} muted={true} poster={video1hero}>
                                <source src={video1} type='video/mp4;codecs="hvc1"'/>
                                <source src={video1webm} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection1;
