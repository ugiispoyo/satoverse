"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  className?: string;
};

export default function VideoPlayer({
  src,
  poster,
  className = "w-full max-w-3xl mx-auto rounded-lg overflow-hidden",
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        backgroundColor: "#2f322d98",
        aspectRatio: "16/9",
      }}
    >
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="none"
          poster={poster}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
