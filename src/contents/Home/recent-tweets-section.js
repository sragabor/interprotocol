import React from "react";
import RecentTweets from "../../components/RecentTweets";

class RecentTweetsSection extends React.Component {
    render() {
        return (
            <div className={'container container-slim'}>
                <RecentTweets/>
                <div className={'flex flex-row mt-8 md:mt-11'}>
                    <div className={'basis-full text-center md:text-left'}>
                        <button>Follow us on Twitter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecentTweetsSection;
