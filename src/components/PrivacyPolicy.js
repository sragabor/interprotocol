import React, {useEffect} from "react";

const PrivacyPolicyContent = () => {

    useEffect(() => {
        (function (d, s, id) {
            var js, tjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://app.termly.io/embed-policy.min.js";
            tjs.parentNode.insertBefore(js, tjs);
        }(document, 'script', 'termly-jssdk'));
    })

    return (
        <div name="termly-embed" data-id="16bbf718-0fc9-43b5-838a-697d2013b102" data-type="iframe"></div>
    )

}

export default PrivacyPolicyContent;
