const mainLineDot = document.querySelectorAll('.main-line-dot');
const mainLine = document.querySelectorAll('.main-line');
const secondaryCircleWobble = document.querySelectorAll('.secondary-circle-wobble');
const secondaryCircleLogo = document.querySelectorAll('.secondary-circle-logo');
const imagePaths= [
    'assets/alipay.svg',
    'assets/bitcoin.svg',
    'assets/apple-pay.svg',
    'assets/ethereum.svg',
    'assets/visa.svg',
    'assets/skrill.svg',
    'assets/paypal-text-circle.svg',
]



mainLineDot.forEach((circle, index) => {
    const randInt = Math.floor(Math.random() * imagePaths.length);
    circle.style.animationDelay = `${index * randInt + 0.5}s`;
})

mainLine.forEach((line, index) => {
    const randInt = Math.random(50, 100);
    line.style.transform = `rotate(${index * (45 + randInt)}deg) translateX(${200 +index * 30 + randInt}px)`;

}
)

secondaryCircleLogo.forEach((circle, index) => {
    circle.style.transform = `rotate(${-index * 45}deg)`;
})

secondaryCircleWobble.forEach((circle, index) => {
    const randInt = Math.random(5, 20);
    circle.style.animationDelay = `${index * 0.5 * randInt}s`;
}
)