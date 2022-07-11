import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className={'container'}>
                    <div className={'flex flex-row'}>
                        <div className={'basis-1/2'}>
                            <div className={'flex flex-row items-center'}>
                                <div className={'basis 1/2'}>
                                    <h2>Stay up<br/>
                                    to <span>date</span></h2>
                                </div>
                                <div className={'basis 1/2'}>
                                    Subscribe
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
