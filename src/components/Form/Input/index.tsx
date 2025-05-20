import React from "react";

type Props = {
  label: string;
  type?: "text" | "number" | "password";
  endAdornment?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, type = "text", endAdornment, ...props }: Props) => {
  return (
    <div className="relative w-full">
      <span className="font-orbitron font-[900] text-[#E3DAAC] text-[10px] uppercase">
        {label}
      </span>
      <div className="relative w-full max-w-2xl h-[36px]">
        {/* SHAPE BACKGROUND */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundColor: "#1c1c1c",
            clipPath: `
            polygon(
              0% 20%,    /* kiri atas miring */
              5% 0%,     /* atas kiri */
              96% 0%,    /* kanan atas sebelum notch */
              100% 10%,  /* notch kanan atas */
              100% 100%,    /* kanan bawah */
              100% 100%,   /* kiri bawah */
              10% 92%     /* bevel kiri bawah */
            )
          `,
          }}
        />

        {/* Garis bawah penuh */}
        <div className="absolute bottom-0 right-0 w-[calc(100%-20px)] h-[1px] bg-[#B1F489] z-10" />

        {/* KANAN: Garis setengah dengan gradient */}
        <div
          className="absolute bottom-0 right-0 w-[1px] h-[80%] z-10"
          style={{
            background: "linear-gradient(to top, #B1F489, #111111)",
          }}
        />

        {/* KIRI: Garis miring + vertikal pendek + gradient */}
        {/* Garis miring */}
        <div
          className="absolute bottom-0 left-[20px] w-[1px] h-[31px] z-10"
          style={{
            backgroundColor: "#B1F489",
            transform: "rotate(-45deg)",
            transformOrigin: "bottom left",
          }}
        />

        {/* KIRI: Garis miring double */}
        {/* Garis miring */}
        <div
          className="absolute bottom-0 left-[10px] w-[4px] h-[18px] z-10"
          style={{
            backgroundColor: "#B1F489",
            transform: "rotate(-45deg)",
            transformOrigin: "bottom left",
          }}
        />

        {/* Garis lurus ke atas setelah miring */}
        <div
          className="absolute bottom-[60%] left-[-2px] w-[1px] h-[10] z-10"
          style={{
            background: "linear-gradient(to top, #B1F489, #111111)",
          }}
        />

        <div className="w-full h-full flex relative z-20 gap-2 pr-2">
          {/* INPUT FIELD */}
          <input
            type={type}
            className="uppercase font-[900] text-[10px] w-full h-full pl-6 bg-transparent text-[#E3DAAC] placeholder:text-[#E3DAAC] focus:outline-none font-orbitron"
            {...props}
          />

          {/* END ADORNMENT */}
          {endAdornment && <>{endAdornment}</>}
        </div>
      </div>
    </div>
  );
};

export default Input;
