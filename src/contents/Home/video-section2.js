import React from "react";

import video2 from "../../videos/video2.mp4"
import video2webm from "../../videos/video2.webm"
import video2hero from "../../videos/video2-poster.png"

class VideoSection2 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-wrap items-center h-full'}>
                    <div className={'basis-full md:basis-1/2 md:pr-52 order-2 md:order-1 md:pl-16'}>
                        <div className={'video-section-content'}>
                            <h2>Swap for IST</h2>
                            <p>
                                Trade in and out of IST using Swap, the native Inter Protocol AMM, or purchase IST directly with other stable tokens, such as USDC via the Parity Stability Module (PSM)
                            </p>
                        </div>
                    </div>
                    <div className={'basis-full md:basis-1/2 h-full order-1 md:order-2'}>
                        <div className={'video-container relative'}>
                            <video autoPlay={true} preload={true} loop={true} playsInline={true} muted={true} poster={video2hero}>
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
