import React from 'react';

export type TimeoutId = ReturnType<typeof setInterval>;

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
) => new IntersectionObserver(callback, { threshold: 0.3 });

export const performCountStep = (
  current: number,
  step: number,
  targetNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  intervalId: TimeoutId,
) => {
  const newValue = current + step;
  if (newValue >= targetNumber) {
    setCount(targetNumber);
    clearInterval(intervalId);
  } else {
    setCount(newValue);
  }
  return newValue;
};

export const startCounterAnimation = (
  targetNumber: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  duration = 1000,
) => {
  let current = 0;
  const step = Math.ceil(targetNumber / (duration / 50));
  let intervalId: TimeoutId;

  intervalId = setInterval(() => {
    current = performCountStep(
      current,
      step,
      targetNumber,
      setCount,
      intervalId,
    );
  }, 20);

  return intervalId;
};
