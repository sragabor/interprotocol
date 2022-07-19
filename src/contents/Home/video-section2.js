import React from "react";

import video2 from "../../videos/video2.mp4"
import video2webm from "../../videos/video2.webm"
import video2hero from "../../images/video-section-2-hero.png"

class VideoSection2 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-wrap items-center h-full'}>
                    <div className={'basis-full md:basis-1/2 md:pr-52 order-2 md:order-1 pl-16'}>
                        <div className={'video-section-content'}>
                            <h2>Swap for $IST</h2>
                            <p>
                                Using the Parity Stability Module (PSM), you can mint $IST with a high-quality off-chain stable token. Alternatively, you can use the native AMM to swap for $IST.
                            </p>
                        </div>
                    </div>
                    <div className={'basis-full md:basis-1/2 h-full order-1 md:order-2'}>
                        <div className={'video-container'}>
                            <video autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={video2hero}>
                                <source src={video2} type='video/mp4;codecs="hvc1"'/>
                                <source src={video2webm} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection2;
