module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/contents/**/*.{js,jsx,ts,tsx}",
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}
