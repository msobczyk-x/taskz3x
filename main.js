const mainLineDot = document.querySelectorAll(".main-line-dot");
const mainLine = document.querySelectorAll(".main-line");
const secondaryCircleWobble = document.querySelectorAll(
  ".secondary-circle-wobble"
);
const secondaryCircleLogo = document.querySelectorAll(".secondary-circle-logo");
const imagesCount = 8;
const mainLineArrow = document.querySelectorAll(".main-line-arrow");

mainLine.forEach((line, index) => {
  //translationsX
  const lineLength = 500 - (index / 1.5) * 30;
  const rotateTranslate = index * 1.5 * (6.5 * index);
  line.style.transform = `rotate(${
    rotateTranslate
  }deg) translateX(${lineLength}px)`;
  const lineLengthTranslate = -lineLength + 30;
  line.style.setProperty("--line-length", `${lineLength}px`);
  line.style.setProperty("--line-length-translate", `${lineLengthTranslate}px`);

  secondaryCircleLogo[index].style.transform = `rotate(${
    -rotateTranslate
  }deg)`;
  const randInt = Math.floor((Math.random() * imagesCount) / 4);
  const animationDelay = 1000 * index * 0.5 * randInt || index * 1000;

  //animations
  const arrow = line.querySelector(".main-line-arrow");
  const arrowAnimation = arrow.animate(
    [
      { opacity: 1, transform: `translateX(${lineLengthTranslate}px)` },
      { transform: `translateX(20px)`, opacity: 1 },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0,.6,.59,1)",
      delay: animationDelay,
      fill: "forwards",
    }
  );
  arrowAnimation.onfinish = () => {
    line.classList.add("active");
    arrow.style.opacity = 0;
    line.classList.add("active-dot");
  };
});

secondaryCircleWobble.forEach((circle, index) => {
  const randInt = Math.random(5, 20);
  circle.style.animationDelay = `${index * 0.5 * randInt}s`;
});
