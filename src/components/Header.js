import React from "react";
import {Link} from "gatsby";

import logo from "../images/interprotocol-logo.png"


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
    toggleMenu = function(){
        document.getElementById('menu').classList.toggle('open');
    }
    toggleHeaderClass = () => {
        if(!document.getElementById("header").classList.contains('menu-opened')){
            if (window.scrollY > 100) {
                document.getElementById("header").classList.add("blur");
            } else {
                document.getElementById("header").classList.remove("blur");
            }
        }
    };
    render() {
        return (
            <header id={'header'} className={this.state.menuOpen ? 'menu-opened blur' : 'blur'}>
                <div className={'container'}>
                    <Link to={'/'}>
                        <div className={'logo'}>
                            <img src={logo} alt="Interprotocol"/>
                        </div>
                    </Link>

                    <button className={this.state.menuOpen ? 'hamburger hamburger--slider is-active' : 'hamburger hamburger--slider'} type="button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                          <span className="hamburger-box">
                            <span className="hamburger-inner"/>
                          </span>
                    </button>

                    <nav>
                        <ul>
                            <li><a href="/">Whitepaper</a></li>
                            <li><a href="/">Docs</a></li>
                            <li><a href="/">Governance</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
