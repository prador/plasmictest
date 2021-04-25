// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SurfaceIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 36"}
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
        d={"M0 4a4 4 0 014-4h61a4 4 0 014 4v28a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"}
        fill={"currentColor"}
        fillOpacity={".01"}
      ></path>
    </svg>
  );
}

export default SurfaceIcon;
/* prettier-ignore-end */
