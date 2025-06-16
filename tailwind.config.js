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
                    primary: '#1a1b3a',
                    secondary: '#2a2d5f',
                    accent: '#3b4280',
                    surface: '#252759',
                    card: '#2d3169'
                },
                crypto: {
                    green: '#10b981',
                    red: '#ef4444',
                    purple: '#8b5cf6',
                    blue: '#3b82f6',
                    cyan: '#06b6d4',
                    orange: '#f97316'
                },
                gradient: {
                    start: '#667eea',
                    end: '#764ba2'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif']
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'pulse-soft': 'pulseSoft 2s infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                }
            }
        },
    },
    plugins: [],
};

