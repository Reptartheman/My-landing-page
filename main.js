import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
const animations = {
  fromTop: {
    keyframes: [
      { offset: 0, transform: "translateY(-1000px)", opacity: 0 },
      { offset: 1, transform: "translateY(0)", opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: '0', iterations: 1, fill: 'forwards' },
  },
  fromBottom: {
    keyframes: [
      { offset: 0, transform: "translateZ(-1400px) translateY(800px)", opacity: 0 },
      { offset: 1, transform: "translateZ(0) translateY(0)", opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: '3000', iterations: 1, fill: 'forwards' },
  },
  fromLeft: {
    keyframes: [
      { offset: 0, transform: "translateZ(-1400px) translateX(-1000px)", opacity: 0 },
      { offset: 1, transform: "translateZ(0) translateX(0)", opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: '1000', iterations: 1, fill: 'forwards' },
  },
  fromRight: {
    keyframes: [
      { offset: 0, transform: "translateZ(-1400px) translateX(1000px)", opacity: 0 },
      { offset: 1, transform: "translateZ(0) translateX(0)", opacity: 1 },
    ],
    options: { duration: 1000, easing: 'linear', delay: '2000', iterations: 1, fill: 'forwards' },
  },
};

const applyAnimation = (element, animation) => {
  const { keyframes, options } = animation;
  return element.animate(keyframes, options)
};

const runAnimation = (elements, animationsToApply) => {
  animationsToApply.forEach((animation, index) => {
    const element = elements[index];
    if(element) applyAnimation(element, animations[animation])
  })
}

const init = () => {
  const domElements = ['header', 'footer', 'cardLeft', 'cardRight']
  const elements = domElements.map(element => document.getElementById(element));
  const animationDirections = Object.keys(animations);
  return runAnimation(elements, animationDirections)
}


window.addEventListener('load', init);