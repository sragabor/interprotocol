import * as React from "react"
import Header from "../components/Header";
import {SEO} from "../components/seo";
import {Helmet} from "react-helmet";
import PrivacyPolicyContent from "../components/PrivacyPolicy";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
                <title>Inter Protocol - Privacy Policy</title>
            </Helmet>
            <Header/>
            <div className={'section pt-20'}>
                <div className={'container container-slim'}>
                    <PrivacyPolicyContent/>
                </div>
            </div>
            <div className={'section footer-section'}>
                <Footer/>
            </div>
        </div>
    )
}

export default PrivacyPolicy

export const Head = () => (
    <SEO />
)
