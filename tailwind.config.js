module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'evergreen': '#D8F5DE',
                'darkgreen': '#68AC5D'
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                heading: ['Syne', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
};