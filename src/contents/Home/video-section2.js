import React from "react";

import video2 from "../../videos/video2.mp4"
import video2webm from "../../videos/video2.webm"
import video2hero from "../../images/video-section-2-hero.png"

class VideoSection2 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-center h-full'}>
                    <div className={'basis-1/2 pr-64'}>
                        <div className={'video-section-content'}>
                            <h2>Arb <br/> the peg</h2>
                            <p>
                                Provide a high-quality stable token and receive newly-minted IST using the Parity Stability module, all via CLI.
                            </p>
                        </div>
                    </div>
                    <div className={'basis-1/2 h-full'}>
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
