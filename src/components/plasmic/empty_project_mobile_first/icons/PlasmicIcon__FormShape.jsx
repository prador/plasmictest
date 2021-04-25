// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FormShapeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 328 56"}
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
          "M17.319 1h1.795V0H17.32v1zM10.86 1V0H5a5 5 0 00-5 5v46a5 5 0 005 5h318a5 5 0 005-5V5a5 5 0 00-5-5H100.528v1H323a4 4 0 014 4v46a4 4 0 01-4 4H5a4 4 0 01-4-4V5a4 4 0 014-4h5.861z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FormShapeIcon;
/* prettier-ignore-end */
