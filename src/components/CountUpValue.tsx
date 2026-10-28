import { useEffect, useRef, useState } from "react";

type CountUpValueProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

const numberFormatter = new Intl.NumberFormat("en-US");

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function CountUpValue({
  value: targetValue,
  prefix = "",
  suffix = "",
  duration = 1800,
}: CountUpValueProps) {
  // Without motion there is nothing to count up: show the final number straight away.
  const [value, setValue] = useState(() => (prefersReducedMotion() ? targetValue : 0));
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = valueRef.current;
    if (!element) return;
    if (prefersReducedMotion()) {
      setValue(targetValue);
      return;
    }

    let animationFrame = 0;
    let observer: IntersectionObserver | undefined;

    const animate = () => {
      const startTime = performance.now();
      const update = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        setValue(Math.floor(targetValue * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        } else {
          setValue(targetValue);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    if (typeof IntersectionObserver === "undefined") {
      animate();
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer?.disconnect();
          animate();
        },
        { threshold: 0.2 },
      );
      observer.observe(element);
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, targetValue]);

  return (
    <span ref={valueRef}>
      {prefix}
      {numberFormatter.format(value)}
      {suffix}
    </span>
  );
}
