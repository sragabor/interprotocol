import React, { useEffect } from 'react'

import whitepaper from '../assets/whitepaper.pdf';
const WhitepaperPage = () => (
    <a href={whitepaper} onLoad={useEffect(()=>{const isBrowser = window && window.location.replace(whitepaper)},[])} >whitepaper</a>
);

export default WhitepaperPage;
