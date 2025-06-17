// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    primary: '#1d1729',
                    secondary: '#1c1621',
                    accent: '#241e2b',
                    surface: '#252759',
                    card: '#322d3d',
                    button: '#1e163d',
                },
                crypto: {
                    green: '#10b981',
                    red: '#ef4444',
                    purple: '#8b5cf6',
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                    orange: '#f97316',
                    pink: '#c018d6',
                },
                gradient: {
                    start: '#3b1a96',
                    end: '#80414b'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
        },
    },
    plugins: [],
};

