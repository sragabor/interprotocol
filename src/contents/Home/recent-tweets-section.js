import React from "react";
import RecentTweets from "../../components/RecentTweets";

class RecentTweetsSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <RecentTweets/>
                <div className={'flex flex-row mt-8 md:mt-14'}>
                    <div className={'basis-full text-center md:text-left'}>
                        <a href="https://twitter.com/inter_protocol" target={'_blank'} rel={'noreferrer'}>
                            <button>Follow us on Twitter</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentTweetsSection;
