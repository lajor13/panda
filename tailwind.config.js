module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swivel: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
          "101%, 100%": { transform: "rotate(0deg)" },
        },
        heartAnimation: {
          "0%": {
            transform: "scale(0) translateY(0)", // Heart starts hidden and at normal position
            opacity: 0,
          },
          "25%": {
            transform: "scale(2) translateY(-50)", // Heart scales up, moves up, and fades out
            opacity: 50,
          },
          "50%": {
            transform: "scale(3) translateY(-100)", // Heart scales up, moves up, and fades out
            opacity: 100,
          },
          "75%": {
            transform: "scale(4) translateY(-100)", // Heart scales up, moves up, and fades out
            opacity: 50,
          },
          "100%": {
            transform: "scale(4) translateY(-100px)", // Heart scales up, moves up, and fades out
            opacity: 0,
          },
        },
        letterAnim: {
          "0%": {
            transform: "scale(0)", // Heart starts hidden and at normal position
            opacity: 0,
          },
          "25%": {
            transform: "scale(0.25)", // Heart scales up, moves up, and fades out
            opacity: 25,
          },
          "50%": {
            transform: "scale(0.5) ", // Heart scales up, moves up, and fades out
            opacity: 75,
          },
          "75%": {
            transform: "scale(0.75) ", // Heart scales up, moves up, and fades out
            opacity: 100,
          },
          "100%": {
            transform: "scale(1)", // Heart scales up, moves up, and fades out
            opacity: 100,
          },
        },
      },
      animation: {
        swivel: "swivel 0.6s ease-in-out infinite",
        heartAnimation: "heartAnimation 1s ease-out forwards",
        letterAnim: "letterAnim 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
