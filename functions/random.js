// https://www.joshwcomeau.com/snippets/javascript/random/
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default random;