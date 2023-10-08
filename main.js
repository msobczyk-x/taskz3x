const mainLineDot = document.querySelectorAll(".main-line-dot");
const mainLine = document.querySelectorAll(".main-line");
const secondaryCircleWobble = document.querySelectorAll(
  ".secondary-circle-wobble"
);
const secondaryCircleLogo = document.querySelectorAll(".secondary-circle-logo");
const imagesCount = 8;
const mainLineArrow = document.querySelectorAll(".main-line-arrow");

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

mainLine.forEach((line, index) => {
  
  line.classList.toggle("clickable");

  //długość linii od środka
  let lineLength;
  if (index === 2 || index === 6) {
    lineLength = 200;
  } else {
    lineLength = 250 - index / 1.5;
  }

  const rotateTranslate = 45 * index;
  const lineLengthTranslate = -lineLength + 30;
  line.style.transform = `rotate(${rotateTranslate}deg) translateX(${lineLength}px)`;
  line.style.setProperty("--line-length", `${lineLength}px`);
  line.style.setProperty("--line-length-translate", `${lineLengthTranslate}px`);
  secondaryCircleLogo[index].style.transform = `rotate(${-rotateTranslate}deg)`;

  //parametry animacji
  const randInt = Math.floor((Math.random() * imagesCount) / 4);
  const animationDelay = 2000 * index * 0.5 * randInt || index * 2000;
  mainLineDot[index].style.setProperty("--duration-dot", `${10000}ms`);

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

  //po kliknięciu w kółko, uruchamiana jest animacja strzałki
  const circleLogoImg = secondaryCircleLogo[index].querySelector(
    ".secondary-circle-wobble"
  );

  const circleLogoImgEvent = () => {
    if (arrowAnimation.playState === "running") {
      if (arrowAnimation.currentTime > animationDelay) {
        circleLogoImg.removeEventListener("click", circleLogoImgEvent);
        line.classList.remove("clickable");
        return;
      }
      circleLogoImg.animate([{ scale: 1 }, { scale: 1.2 }, { scale: 1 }], {
        duration: 1000,
        easing: "cubic-bezier(0,.6,.59,1)",
      });
      line.classList.remove("clickable");
      arrowAnimation.cancel();
      arrowAnimation.effect.updateTiming({
        duration: 1500,
        easing: "cubic-bezier(0,.6,.59,1)",
        delay: 200,
        fill: "forwards",
      });
      arrowAnimation.play();
      circleLogoImg.removeEventListener("click", circleLogoImgEvent);
    }
  };

  circleLogoImg.addEventListener("click", circleLogoImgEvent);
  //czyszczenie po zakończeniu animacji
  arrowAnimation.onfinish = () => {
    line.classList.remove("clickable");
    line.classList.add("active");
    arrow.style.opacity = 0;
    line.classList.add("active-dot");
    circleLogoImg.removeEventListener("click", circleLogoImgEvent);
  };
});

//animacja kółek (randomowe opóźnienie)
secondaryCircleWobble.forEach((circle, index) => {
  const randInt = Math.random(5, 20);
  circle.style.animationDelay = `${index * 0.5 * randInt}s`;
});
