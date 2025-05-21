"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function LazyImage({
  src,
  alt,
  width,
  height,
  minHeightWrapper = "200px",
  backgroundColorWrapper = "#191919",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  minHeightWrapper?: string;
  backgroundColorWrapper?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        minHeight: minHeightWrapper,
        backgroundColor: backgroundColorWrapper,
      }}
    >
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto transition duration-700 blur-sm opacity-30"
          onLoadingComplete={(img) => {
            img.classList.remove("blur-sm", "opacity-30");
            img.classList.add("blur-0", "opacity-100");
          }}
          loading="lazy"
        />
      )}
    </div>
  );
}
export default LazyImage;
