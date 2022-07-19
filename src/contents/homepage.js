import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import HeroSection from "./Home/hero-section";
import WhatsDifferentSection from "./Home/whats-different-section";
import RecentTweetsSection from "./Home/recent-tweets-section";
import VideoSection1 from "./Home/video-section1";
import VideoSection2 from "./Home/video-section2";
import VideoSection3 from "./Home/video-section3";
import Footer from "../components/Footer";
import UseCasesSection from "./Home/use-cases-section";
import HowItWorks from "./Home/how-it-works-section";
import VoiceSection from "./Home/voice-section";
import WhatPeopleSays from "./Home/what-people-says";

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

        if(destination.item.classList.contains('white-section')){
            document.getElementById("header").classList.add('colorful');
        }else{
            document.getElementById("header").classList.remove('colorful');
        }

        if(destination.item.classList.contains('video-section') && direction === 'down'){
            document.getElementById("header").classList.add('hidden-header');
        }else{
            document.getElementById("header").classList.remove('hidden-header');
        }

        if(destination.item.classList.contains('video-section')){
            document.getElementById("fp-nav").classList.add('fp-nav-show');
        }else{
            document.getElementById("fp-nav").classList.remove('fp-nav-show');
        }

        if(destination.index === 0){
            document.getElementById("header").classList.remove('with-bg');
        }else{
            document.getElementById("header").classList.add('with-bg');
        }
    }

    render(){
        return (
            <ReactFullpage
                //fullpage options
                licenseKey = {'K7DRH-O4WO9-RVJKK-JL61H-LBBSL'}
                scrollingSpeed = {1000} /* Options here */
                onLeave={this.onLeave.bind(this)}
                normalScrollElements={'.normal-scroll'}
                scrollOverflow={true}
                responsiveWidth={768}
                responsiveHeight={800}
                navigation={true}
                navigationPosition={'left'}


    render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className={'section hero-section fp-auto-height-responsive'}>
                                <HeroSection/>
                            </div>
                            <div className={'section whats-different-section fp-auto-height'}>
                                <WhatsDifferentSection/>
                            </div>
                            <div className={'section recent-tweets-section fp-auto-height white-section'}>
                                <RecentTweetsSection/>
                            </div>
                            <div className={'section video-section white-section fp-auto-height-responsive'}>
                                <VideoSection1/>
                            </div>
                            <div className={'section video-section white-section fp-auto-height-responsive'}>
                                <VideoSection2/>
                            </div>
                            <div className={'section video-section white-section fp-auto-height-responsive'}>
                                <VideoSection3/>
                            </div>
                            <div className={'section white-section fp-auto-height-responsive'}>
                                <div className={'use-cases-section'}>
                                    <UseCasesSection/>
                                </div>
                                <div className={'how-it-works-section'}>
                                    <HowItWorks/>
                                </div>
                                <div className={'voice-section'}>
                                    <VoiceSection/>
                                </div>
                                <div className={'what-people-says-section'}>
                                    <WhatPeopleSays/>
                                </div>
                                <div className={'footer-section'}>
                                    <Footer/>
                                </div>
                            </div>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        )
    }
}


export default Fullpage;
