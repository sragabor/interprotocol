import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'container container-slim'}>
                    <div className={'flex flex-row'}>
                        <div className={'basis-full md:basis-5/12'}>
                            <div className={'flex flex-row items-center'}>
                                <div className={'flex flex-col basis-full md:basis-1/2'}>
                                    <h2>Stay up<br/>
                                    to <span>date</span></h2>
                                </div>
                            </div>
                            <hr/>
                            <div className={'flex flex-row'}>
                                <div className={'flex flex-col pr-10 md:pr-20'}>
                                    <legend>Sitemap</legend>

                                    <ul>
                                        <li>
                                            <a href="https://inter.trade/whitepaper">Whitepaper</a>
                                        </li>
                                        <li>
                                            <a href="https://commonwealth.im/agoric/discussions/Inter" target={"_blank"} rel={'noreferrer'}>Governance</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className={'flex flex-col'}>
                                    <legend>Follow us</legend>

                                    <ul>
                                        <li>
                                            <a href="http://discord.gg/Gy25rwQuh5" target={"_blank"} rel={'noreferrer'}>Discord</a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/inter_protocol" target={"_blank"} rel={'noreferrer'}>Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={'flex flex-row'}>
                                <div className={'flex flex-col basis-full'}>
                                    <div className={'copyright'}>

                                        <a href="https://designatives.com" target={'_blank'} rel={'noreferrer'}>
                                        Made with

                                        <svg width="15px" className={'inline-block mx-2 -mt-1'} height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Designatives" stroke="none" strokeWidth="1" fill="#000000" fillRule="evenodd">
                                                <g id="LEARNMODULAR_ARTICLE" transform="translate(-867.000000, -4874.000000)" fill="#000000">
                                                    <g id="FOOTER" transform="translate(0.000000, 3787.000000)">
                                                        <g id="Group-9" transform="translate(675.000000, 1082.000000)">
                                                            <path d="M193.463433,6.84740753 L193.886947,6.50006927 C194.947136,5.63057132 196.476569,5.64055087 197.525322,6.52380968 C198.573577,7.40664948 200.102735,7.41508463 201.160666,6.54386297 L201.217141,6.49735556 C202.269673,5.63058013 203.791797,5.64172073 204.831529,6.52380968 L205.215393,6.84947263 C206.111226,7.6094809 206.627667,8.72487567 206.627667,9.89966506 L206.627667,12.1133095 C206.627667,13.3120198 206.090073,14.447544 205.162876,15.2072894 L201.849043,17.9226471 C200.374762,19.1306739 198.252904,19.1306739 196.778624,17.9226471 L193.46479,15.2072894 C192.537594,14.447544 192,13.3120198 192,12.1133095 L192,9.94027478 C192,8.74217905 192.537045,7.60717006 193.463433,6.84740753 Z" id="Rectangle"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                        by Designatives
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
