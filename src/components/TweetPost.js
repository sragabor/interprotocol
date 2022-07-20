import React from "react";

class TweetCard extends React.Component {
    render() {
        return (
            <div
                key={this.props.index}
                className="relative h-auto snap-start px-1"
            >

                <div className={'tweet-card'}>
                    <div className={'author'}>
                        <div className={'flex items-center'}>
                            <div className={'flex basis-auto'}>
                                <div className={'twitter-image'}>
                                    <img src={this.props.tweet.imageUrl} alt={this.props.tweet.name}/>
                                </div>
                            </div>
                            <div className={'flex basis-auto pl-3'}>
                                <div className={'flex flex-wrap items-center'}>
                                    <div className={'flex basis-full twitter-name'}>{this.props.tweet.name}</div>
                                    <div className={'flex basis-auto twitter-user'}>{this.props.tweet.user} • </div>
                                    <div className={'flex basis-auto pl-2 '}><a href="#" className={'twitter-link'}>Follow</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'text'}>
                        {this.props.tweet.text}
                    </div>

                    <div className={'flex'}>
                        <div className={'flex basis-auto'}>
                            <div className={'date'}>{this.props.tweet.date}</div>
                        </div>
                    </div>

                    <div className={'flex w-full twitter-footer'}>
                        <div className={'flex basis-auto'}>
                            <div className={'likes'}>
                                <div className={'flex items-center'}>
                                    <div className={'flex basis-auto'}>
                                        <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                <g id="IP---FULL-NEW" transform="translate(-1135.000000, -2083.000000)" stroke="#7D7D7D">
                                                    <g id="tweets" transform="translate(-3.000000, 1668.000000)">
                                                        <g id="Group-9-Copy-2" transform="translate(1123.000000, 229.000000)">
                                                            <g id="Group-29" transform="translate(14.000000, 149.000000)">
                                                                <g id="love-it" transform="translate(2.000000, 38.000000)">
                                                                    <path d="M8.99892249,15.5452865 L1.32958931,7.64743853 C-0.0507107349,6.29360597 -0.394895299,4.20158443 0.478919399,2.47689932 L0.478919399,2.47689932 C1.14425531,1.1853863 2.38409081,0.287217879 3.81863549,0.0575239046 C5.25318017,-0.172170069 6.71146611,0.293985152 7.74678646,1.3131954 L8.99892249,2.45498694 L10.2510585,1.3131954 C11.2865263,0.294314191 12.744704,-0.171619488 14.1791245,0.0580546099 C15.6135451,0.287728708 16.8533469,1.18565285 17.5189256,2.47689932 L17.5189256,2.47689932 C18.392221,4.20166443 18.0480895,6.29336382 16.6682557,7.64743853 L8.99892249,15.5452865 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={'flex basis-auto pl-2'}>
                                        {this.props.tweet.likes}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex basis-auto pl-3'}>
                            <div className={'comments'}>

                                <div className={'flex items-center'}>
                                    <div className={'flex basis-auto'}>
                                        <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                <g id="IP---FULL-NEW" transform="translate(-1135.000000, -2083.000000)" stroke="#7D7D7D">
                                                    <g id="tweets" transform="translate(-3.000000, 1668.000000)">
                                                        <g id="Group-9-Copy-2" transform="translate(1123.000000, 229.000000)">
                                                            <g id="Group-29" transform="translate(14.000000, 149.000000)">
                                                                <g id="love-it" transform="translate(2.000000, 38.000000)">
                                                                    <path d="M8.99892249,15.5452865 L1.32958931,7.64743853 C-0.0507107349,6.29360597 -0.394895299,4.20158443 0.478919399,2.47689932 L0.478919399,2.47689932 C1.14425531,1.1853863 2.38409081,0.287217879 3.81863549,0.0575239046 C5.25318017,-0.172170069 6.71146611,0.293985152 7.74678646,1.3131954 L8.99892249,2.45498694 L10.2510585,1.3131954 C11.2865263,0.294314191 12.744704,-0.171619488 14.1791245,0.0580546099 C15.6135451,0.287728708 16.8533469,1.18565285 17.5189256,2.47689932 L17.5189256,2.47689932 C18.392221,4.20166443 18.0480895,6.29336382 16.6682557,7.64743853 L8.99892249,15.5452865 Z" id="Path"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={'flex basis-auto pl-2'}>
                                        {this.props.tweet.messages}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetCard;
