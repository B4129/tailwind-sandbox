

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx,css}", './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['ui-sans-serif', 'system-ui'],
            'serif': ['ui-serif', 'Georgia'],
            'mono': ['ui-monospace', 'SFMono-Regular'],
            'display': ['Oswald'],
            'roboto': ['roboto'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}