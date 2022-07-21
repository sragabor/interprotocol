import React from "react";

class TweetCard extends React.Component {
    render() {
        return (
            <div
                key={this.props.index}
                className="relative h-auto snap-start px-4"
            >

                <a href={this.props.tweet.link} target={'_blank'} rel={'noreferrer'}>
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
                                            <svg width={'20px'} height={'20px'} viewBox="0 0 24 24">
                                                <g>
                                                    <path fill={'#7D7D7D'}
                                                        d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
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
                </a>
            </div>
        );
    }
}

export default TweetCard;
