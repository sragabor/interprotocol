import React, { useState, useRef, useEffect } from 'react';

// Data
import data from '../contents/tweetPosts.json';
import TweetCard from "./TweetPost";

const Tweets = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const twitterPosts = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            twitterPosts.current !== null &&
            twitterPosts.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && twitterPosts.current !== null) {
            return (
                twitterPosts.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (twitterPosts !== null && twitterPosts.current !== null) {
            twitterPosts.current.scrollLeft = twitterPosts.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = twitterPosts.current
            ? twitterPosts.current.scrollWidth - twitterPosts.current.offsetWidth
            : 0;
    }, []);

    return (
        <div>
            <div className={'flex flex-row items-end justify-between'}>
                <div className={'basis-1/4'}>
                    <h3>Recent <span>tweets</span></h3>
                </div>
                <div className="basis-auto pt-5">
                    <button
                        onClick={movePrev}
                        className="arrow-button"
                        disabled={isDisabled('prev')}
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
                        onClick={moveNext}
                        className="arrow-button ml-2.5"
                        disabled={isDisabled('next')}
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
            </div>
            <div className="carousel my-12 mx-auto">
                <div className="relative">

                    <div
                        ref={twitterPosts}
                        className="carousel-container relative flex flex-nowrap gap-7 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                    >
                        {data.posts.map((post, index) => {
                            return (
                                <TweetCard index={index} tweet={post}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tweets;
