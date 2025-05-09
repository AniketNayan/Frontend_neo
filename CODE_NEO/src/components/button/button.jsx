/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Button = ({
  text = "Button",
  state,
  changeIcon,
  size,
  type,
  className,
  styleLayerClassName,
  divClassName,
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex flex-col items-start gap-2.5 relative ${className}`}
    >
      <div
        className={`inline-flex h-12 items-center justify-center gap-1 px-4 py-2 relative bg-mint-green rounded ${styleLayerClassName}`}
      >
        <div
          className={`relative w-fit font-montserrat-medium-14px font-[number:var(--montserrat-medium-14px-font-weight)] text-blackish-green text-[length:var(--montserrat-medium-14px-font-size)] tracking-[var(--montserrat-medium-14px-letter-spacing)] leading-[var(--montserrat-medium-14px-line-height)] [font-style:var(--montserrat-medium-14px-font-style)] ${divClassName}`}
        >
          {text}
        </div>
      </div>
    </button>
  );
};
