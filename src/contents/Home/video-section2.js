import React from "react";

import video2 from "../../videos/video2.mp4"
import video2webm from "../../videos/video2.webm"
import video2hero from "../../images/video-section-2-hero.png"

class VideoSection2 extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-center'}>
                    <div className={'basis-1/2'}>

                    </div>
                    <div className={'basis-1/2'}>
                        <video autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={video2hero}>
                            <source src={video2} type='video/mp4;codecs="hvc1"'/>
                            <source src={video2webm} type="video/webm" />
                        </video>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection2;
