import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from "../contents/tweetPosts.json";
import TweetCard from "./TweetPost";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
        partialVisibilityGutter: 100
    },
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 4,
        partialVisibilityGutter: 100
    },
    laptop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3,
        partialVisibilityGutter: 100
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        partialVisibilityGutter: 100
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group md:absolute md:top-0 md:right-0 pt-3">
            <button
                className="arrow-button"
                onClick={() => previous()}
                disabled={currentSlide === 0 ? true : false}
            >
                <svg width="28px" height="18px" viewBox="0 0 28 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="IP---FULL-NEW" transform="translate(-1429.000000, -1797.000000)" stroke="#FFFFFF" strokeWidth="2">
                            <g id="tweets" transform="translate(-3.000000, 1668.000000)">
                                <g id="Group-28-Copy" transform="translate(1446.000000, 138.000000) rotate(-180.000000) translate(-1446.000000, -138.000000) translate(1417.000000, 109.000000)">
                                    <g id="Group-13" transform="translate(15.558479, 20.776735)">
                                        <polyline id="Path-2" points="17.5952133 0 25.7647053 8.169492 17.5952133 16.338984"></polyline>
                                        <line x1="25.7647053" y1="8.277039" x2="0.44152065" y2="8.22326526" id="Path-3"></line>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <span className="sr-only">Prev</span>
            </button>

            <button
                className="arrow-button ml-2.5"
                onClick={() => next()}
                disabled={rest.carouselState.currentSlide + rest.carouselState.slidesToShow === rest.carouselState.totalItems ? true : false}
            >
                <svg width="28px" height="18px" viewBox="0 0 28 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="IP---FULL-NEW" transform="translate(-1497.000000, -1797.000000)" stroke="#FFFFFF" strokeWidth="2">
                            <g id="tweets" transform="translate(-3.000000, 1668.000000)">
                                <g id="Group-28" transform="translate(1485.000000, 109.000000)">
                                    <g id="Group-19" transform="translate(15.558479, 20.776735)">
                                        <polyline id="Path-2" points="17.5952133 0 25.7647053 8.169492 17.5952133 16.338984"></polyline>
                                        <line x1="25.7647053" y1="8.277039" x2="0.44152065" y2="8.22326526" id="Path-3"></line>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};


const RecentTweets = () => {

    return (
        <div className={'relative'}>
            <div className={'flex flex-row items-end justify-between'}>
                <div className={'basis-full'}>
                    <h3>Recent <span>tweets</span></h3>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                arrows={false}
                containerClass={'flex -mx-4 mt-10 md:mt-10'}
                renderButtonGroupOutside={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                showDots={true}
                dotListClass="dot"
                customButtonGroup={<ButtonGroup />}
            >
                {data.posts.map((post, index) => {
                    return (
                        <TweetCard index={index} tweet={post}/>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default RecentTweets;
