import React from "react";
import {Link} from "gatsby";

import logo from "../images/interprotocol-logo.svg"
import logoColor from "../images/interprotocol-logo-color.svg"

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.toggleHeaderClass);
        this.toggleHeaderClass();
    }

    toggleHeaderClass = () => {
        if(!document.getElementById("header").classList.contains('menu-opened')){
            if (window.scrollY > 100) {
                document.getElementById("header").classList.add("with-bg");
            } else {
                document.getElementById("header").classList.remove("with-bg");
            }
        }
    };
    render() {
        return (
            <header id={'header'} className={this.state.menuOpen ? 'menu-opened' : ''}>
                <div className={'header-bg'}/>
                <div className={'container'}>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex flex-col basis-auto'}>
                            <div className={'flex items-center'}>
                                <div className={'flex flex-col basis-auto md:hidden'}>
                                    <button className={this.state.menuOpen ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider'} type="button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                                      <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                      </span>
                                    </button>
                                </div>
                                <div className={'flex flex-col basis-auto'}>
                                    <Link to={'/'}>
                                        <div className={'logo'}>
                                            <img src={logoColor} alt="Interprotocol" className={'color-logo'}/>
                                            <img src={logo} alt="Interprotocol" className={'black-logo'}/>
                                        </div>
                                    </Link>
                                </div>
                                <div className={'flex flex-col basis-auto'}>
                                    <nav id={'menu'}>
                                        <ul>
                                            <li><a href="/">Whitepaper</a></li>
                                            <li><a href="/">Docs</a></li>
                                            <li><a href="/">Governance</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col basis-auto'}>
                            <div className={'flex items-center'}>
                                <div className={'flex flex-col'}>
                                    <a href="#" target={'_blank'}>
                                        <svg width="20px" height="17px" viewBox="0 0 20 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="IP---FULL-NEW" transform="translate(-1479.000000, -51.000000)" fill="#000000" fillRule="nonzero">
                                                    <g id="Logo-black" transform="translate(1479.000000, 51.000000)">
                                                        <path d="M17.952468,4.04571395 C17.9646557,4.2220292 17.9646557,4.39834446 17.9646557,4.57628474 C17.9646557,9.99818195 13.8370912,16.2512797 6.28966078,16.2512797 L6.28966078,16.2480296 C4.06012594,16.2512797 1.87690433,15.6126447 0,14.4085009 C0.324192566,14.4475015 0.650010156,14.4670018 0.97664026,14.4678143 C2.82429413,14.4694393 4.61913467,13.8494921 6.07271989,12.7079118 C4.31687995,12.6745988 2.77716839,11.5297684 2.23928499,9.85842977 C2.8543571,9.97705662 3.488117,9.95268124 4.09181393,9.78774117 C2.17753402,9.40098512 0.800325005,7.71908384 0.800325005,5.76580332 C0.800325005,5.74792804 0.800325005,5.73086528 0.800325005,5.71380251 C1.37070892,6.03149497 2.0093439,6.20781023 2.6626041,6.22731053 C0.859638432,5.02235421 0.303879748,2.62381673 1.39264676,0.748537428 C3.47592931,3.31201498 6.54966484,4.87041433 9.84927889,5.03535441 C9.51858623,3.61020714 9.97034329,2.11680881 11.0363599,1.11498065 C12.6890108,-0.438543621 15.2882389,-0.358917376 16.8417632,1.29292093 C17.760715,1.1117306 18.6414788,0.774537834 19.4474914,0.296780369 C19.1411741,1.24660771 18.5001016,2.05343282 17.6437132,2.56612833 C18.4570384,2.47025183 19.2516758,2.25249843 20,1.92018073 C19.4491164,2.74569363 18.7552306,3.46476737 17.952468,4.04571395 Z" id="white_background"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div className={'flex flex-col pl-5'}>
                                    <a href="#" target={'_blank'}>
                                        <svg width="22px" height="18px" viewBox="0 0 22 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <g id="FLUIDITY---MAIN" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="IP---FULL-NEW" transform="translate(-1518.000000, -51.000000)" fill="#000000">
                                                    <g id="Group-3" transform="translate(1517.999516, 51.000000)">
                                                        <path d="M14.6545618,11.6096468 C13.5676935,11.6096468 12.676546,10.595156 12.676546,9.35961236 C12.676546,8.12437031 13.5486944,7.10807009 14.6545618,7.10807009 C15.7604291,7.10807009 16.6515766,8.12256087 16.632276,9.35961236 C16.632276,10.595156 15.7604291,11.6096468 14.6545618,11.6096468 M7.34564423,11.6096468 C6.25877598,11.6096468 5.36762846,10.595156 5.36762846,9.35961236 C5.36762846,8.12437031 6.2397769,7.10807009 7.34564423,7.10807009 C8.45120999,7.10807009 9.34235751,8.12256087 9.32335843,9.35961236 C9.32516786,10.595156 8.45120999,11.6096468 7.34564423,11.6096468 M18.636227,1.42613761 C17.2118988,0.75996337 15.6892579,0.275637508 14.0972553,0 C13.9018362,0.353443281 13.6735456,0.82872196 13.5161246,1.20689421 C11.8236982,0.952668367 10.1469536,0.952668367 8.48589086,1.20689421 C8.3281683,0.82872196 8.09475098,0.353443281 7.89752239,0 C6.3040119,0.275637508 4.77925999,0.761772806 3.35523339,1.42975648 C0.4827528,5.7702933 -0.295908081,10.0031686 0.0934223592,14.1757294 C1.99875909,15.5985497 3.84498756,16.4628573 5.66015404,17.0283062 C6.10829117,16.4115899 6.50787509,15.7556691 6.85227118,15.0647659 C6.19665199,14.8156668 5.56847592,14.507761 4.97498072,14.1510005 C5.1324017,14.0342918 5.28650538,13.9124564 5.43518076,13.7870021 C9.05526024,15.4800316 12.9883722,15.4800316 16.5647237,13.7870021 C16.7152085,13.9124564 16.8693122,14.0342918 17.0252253,14.1510005 C16.4299207,14.5095705 15.7999351,14.8174763 15.144316,15.0665754 C15.488712,15.7556691 15.8864865,16.4133993 16.3364331,17.0301157 C18.153409,16.4646667 20.0011453,15.6000576 21.9064821,14.1757294 C22.3633648,9.33850226 21.1260118,5.14483138 18.636227,1.42613761" id="Fill-1"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
