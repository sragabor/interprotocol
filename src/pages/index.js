import * as React from "react"
import Header from "../components/Header";
import Fullpage from "../contents/homepage";
import {SEO} from "../components/seo";

const IndexPage = () => {
    return (
        <div>
            <Header/>
            <Fullpage/>
        </div>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)
