import React from "react";
import video from "../../videos/hero.mp4"
import videowebm from "../../videos/hero.webm"
import videohero from "../../videos/hero-hero.png"

class HeroSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <div className={'video-container'}>
                    <video autoPlay={true} preload={'none'} loop={true} playsInline={true} muted={true} poster={videohero}>
                        <source src={video} type='video/mp4;codecs="hvc1"'/>
                        <source src={videowebm} type="video/webm" />
                    </video>
                </div>
                <div className={'flex items-center content-center h-full'}>
                    <div className={'flex flex-col basis-full sm:basis-8/12'}>
                        <h1 className={'uppercase'}>The Stable Token for Cosmos IBC</h1>
                        <div className={'text'}>
                            Introducing $IST, the Inter Stable Token powered by Inter Protocol and backed by assets such as $ATOM and $OSMO.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;
