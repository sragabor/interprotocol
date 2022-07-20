import * as React from "react"
import Header from "../components/Header";
import Fullpage from "../contents/homepage";
import {SEO} from "../components/seo";
import {Helmet} from "react-helmet";
import privacy from "../js/privacy-policy";

const IndexPage = () => {
    return (
        <div>
            <Helmet>
                <title>Inter Protocol</title>
            </Helmet>
            <Header/>
            <Fullpage/>
        </div>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)
