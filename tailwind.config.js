/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            fontWeight: {
                thin: 100,
                light: 300,
                normal: 400,
                medium: 500,
                bold: 700,
            },
        },
    },
    plugins: [],
};
