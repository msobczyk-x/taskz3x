const mainLineDot = document.querySelectorAll(".main-line-dot");
const mainLine = document.querySelectorAll(".main-line");
const secondaryCircleWobble = document.querySelectorAll(
  ".secondary-circle-wobble"
);
const secondaryCircleLogo = document.querySelectorAll(".secondary-circle-logo");
const imagesCount = 22;
const mainLineArrow = document.querySelectorAll(".main-line-arrow");
mainLineDot.forEach((circle, index) => {
  const randInt = Math.floor(Math.random() * imagesCount/2);
  circle.style.animationDelay = `${index * randInt + 0.5}s`;
});


mainLine.forEach((line, index) => {
  const lineLength = 500 - (index / 1.5) * 30;
  line.style.transform = `rotate(${
   index*1.5 *  (6.5 * index)
  }deg) translateX(${lineLength}px)`;

  line.style.setProperty("--line-length", `${lineLength}px`);
  line.style.setProperty("--line-length-translate", `${-lineLength + 20}px`);

  secondaryCircleLogo[index].style.transform = `rotate(${
    -index*1.5 *  (6.5 * index)
  }deg)`;
});

secondaryCircleWobble.forEach((circle, index) => {
  const randInt = Math.random(5, 20);
  circle.style.animationDelay = `${index * 0.5 * randInt}s`;
});


mainLineArrow.forEach((arrow, index) => {
    const randInt = Math.random(5, 20);
    const animationDelay = index * 2 * randInt;
    arrow.style.animationDelay = `${animationDelay}s`;
    arrow.classList.toggle("active")
    setTimeout(() => {
        console.log(arrow.parentElement)
        arrow.parentElement.classList.toggle("active")
        arrow.parentElement.querySelector(".main-line-dot").classList.toggle("active")
        /* arrow.classList.toggle("active") */
    }, animationDelay*1000*6);

});


