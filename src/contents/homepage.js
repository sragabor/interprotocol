import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroSection from "./Home/hero-section";
import StakeSection from "./Home/stake-section";
import VideoSection1 from "./Home/video-section1";
import VideoSection2 from "./Home/video-section2";
import VideoSection3 from "./Home/video-section3";
import Footer from "../components/Footer";

class Fullpage extends React.Component {
    onLeave(origin, destination, direction) {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event


        origin.item.classList.add('leave');
        origin.item.classList.remove('slide-down');
        origin.item.classList.remove('slide-up');

        if(direction === 'down'){
            destination.item.classList.remove('slide-down');
            destination.item.classList.add('slide-up');
        }
        if(direction === 'up'){
            destination.item.classList.remove('slide-up');
            destination.item.classList.add('slide-down');
        }

        if(destination.item.querySelector('video') !== null){
            const nextVideo = destination.item.querySelector('video');
            nextVideo.play();
        }

        if(origin.item.querySelector('video') !== null){
            const prevVideo = origin.item.querySelector('video');
            prevVideo.pause();
        }

        setTimeout(function(){
            origin.item.classList.remove('leave');
        },100)
    }

    render(){
        return (
            <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
                onLeave={this.onLeave.bind(this)}
                normalScrollElements = '.normal-scroll'


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
                                <VideoSection1/>
                            </div>
                            <div className={'section video-section'}>
                                <VideoSection2/>
                            </div>
                            <div className={'section video-section'}>
                                <VideoSection3/>
                            </div>
                            <div className={'section footer-section fp-auto-height normal-scroll'}>
                                <Footer/>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}


export default Fullpage;
