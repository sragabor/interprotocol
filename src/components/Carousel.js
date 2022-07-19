import React, { useState, useRef, useEffect } from 'react';

// Data
import data from '../contents/whatPeopleAreSaying.json';

const Carousel = () => {
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div className="carousel my-12 mx-auto">
            <div className="relative w-[150vw]">

                <div
                    ref={carousel}
                    className="carousel-container w-[1000%] relative flex gap-2.5 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item relative w-[3%] h-[29rem] snap-start"
                            >
                                <a
                                    href={resource.link}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className="h-full w-full aspect-video block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                                    style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                >
                                    <img
                                        src={resource.imageUrl || ''}
                                        alt={resource.title}
                                        className="w-full aspect-video hidden"
                                    />
                                </a>
                                <a
                                    href={resource.link}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className="h-full w-full aspect-video block absolute top-0 left-0"
                                >
                                    <div className={'overlay'}>
                                        <div className={'text'}>
                                            <h5>
                                                {resource.title}
                                            </h5>

                                            <div className={'flex flex-row items-center'}>
                                                <div className={'flex flex-col basis-auto '}>
                                                    <svg width="40px" height="41px" viewBox="0 0 40 41" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <g id="IP---FULL-NEW" transform="translate(-452.000000, -9065.000000)">
                                                                <g id="Group-19-Copy" transform="translate(391.000000, 8445.000000)">
                                                                    <g id="Group-18" transform="translate(1.000000, 241.000000)">
                                                                        <g id="Group-5" transform="translate(60.000000, 247.000000)">
                                                                            <g id="Group-14" transform="translate(0.000000, 132.000000)">
                                                                                <rect id="Rectangle" fill="#FEC20A" x="0" y="0" width="40" height="40.1074589" rx="20"></rect>
                                                                                <path d="M21.8014639,17.2507565 L25.0387196,23.7079209 C25.3713861,24.3714711 25.1031517,25.1790643 24.4396015,25.5117307 C24.2526442,25.6054605 24.0463928,25.6542668 23.8372557,25.6542668 L17.3627443,25.6542668 C16.6204736,25.6542668 16.0187443,25.0525375 16.0187443,24.3102668 C16.0187443,24.1011296 16.0675505,23.8948783 16.1612804,23.7079209 L19.3985361,17.2507565 C19.7312025,16.5872063 20.5387956,16.318972 21.2023458,16.6516384 C21.461424,16.7815255 21.6715768,16.9916783 21.8014639,17.2507565 Z" id="Triangle" fill="#FFFFFF" transform="translate(20.600000, 20.254267) rotate(-270.000000) translate(-20.600000, -20.254267) "></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className={'flex flex-col basis-auto pl-2.5 text-white'}>
                                                    Play
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className="flex pt-10">
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
        </div>
    );
};

export default Carousel;
