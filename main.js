const mainLineDot = document.querySelectorAll('.main-line-dot');

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