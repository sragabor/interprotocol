import React from "react";
import Tweets from "../../components/Tweets";

class RecentTweetsSection extends React.Component {
    render() {
        return (
            <div className={'container'}>
                <div className={'flex flex-row items-end justify-between'}>
                    <div className={'basis-1/4'}>
                        <h3>Recent <span>tweets</span></h3>
                    </div>
                    <div className={'basis-auto pb-5'}>
                        <button className={'arrow-button'}>
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
                        </button>
                        <button className={'arrow-button ml-2.5'}>
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
                        </button>
                    </div>
                </div>
                <div className={'flex flex-row'}>
                    <div className={'basis-full'}>
                        <Tweets/>
                    </div>
                </div>
                <div className={'flex flex-row mt-11'}>
                    <div className={'basis-full'}>
                        <button>Follow us on Twitter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentTweetsSection;
