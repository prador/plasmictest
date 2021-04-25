// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BaseFabExtendedAtomsDiamondIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 279 36"}
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
        d={"M0 31.05V4.95L4.95 0h269.1L279 4.95v26.1L274.05 36H4.95L0 31.05z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BaseFabExtendedAtomsDiamondIcon;
/* prettier-ignore-end */
