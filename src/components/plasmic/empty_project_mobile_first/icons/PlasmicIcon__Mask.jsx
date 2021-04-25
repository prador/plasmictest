// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 11"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M10.417 0H0v10.417h10.417V0zm8.333 5.208a5.208 5.208 0 1110.417 0 5.208 5.208 0 01-10.417 0zm22.917 5.209L47.917 0h-12.5l6.25 10.417z"
        }
        fill={"currentColor"}
        fillOpacity={".38"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
