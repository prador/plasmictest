// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: v3r5FjeHwUDiayAfitwffE
// Component: kXtaoaFrcWdiP
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Avatar from "../../Avatar"; // plasmic-import: ZJMIeo5BqZDP_/component
import ActionButton from "../../ActionButton"; // plasmic-import: NASyORUGBEVIc/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_twitter.module.css"; // plasmic-import: v3r5FjeHwUDiayAfitwffE/projectcss
import * as sty from "./PlasmicTweet.module.css"; // plasmic-import: kXtaoaFrcWdiP/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: SUOW18eEBhPQ1I/icon
import ReplyIcon from "./icons/PlasmicIcon__Reply"; // plasmic-import: 9PMx01lrUjcJCh/icon
import RetweetIcon from "./icons/PlasmicIcon__Retweet"; // plasmic-import: nMJ3l4GNZh_kf-/icon
import LikeIcon from "./icons/PlasmicIcon__Like"; // plasmic-import: AoLbRLzOlWeDHe/icon
import ShareIcon from "./icons/PlasmicIcon__Share"; // plasmic-import: 8xZSAC0qNsKVKL/icon
import image3M0XVaIEaMcyIya from "./images/image3.png"; // plasmic-import: m0xVaIEaMCYIya/picture

export const PlasmicTweet__VariantProps = new Array("options");

export const PlasmicTweet__ArgProps = new Array(
  "name",
  "username",
  "children",
  "slot3",
  "timestamp"
);

function PlasmicTweet__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__v1Fet)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__tC8Z)}
        >
          <Avatar
            data-plasmic-name={"avatar"}
            data-plasmic-override={overrides.avatar}
            className={classNames("__wab_instance", sty.avatar)}
          >
            <p.PlasmicSlot
              defaultContents={
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__vs1AU)}
                  role={"img"}
                  src={image3M0XVaIEaMcyIya}
                />
              }
              value={args.slot3}
            />
          </Avatar>

          {(hasVariant(variants, "options", "hasReplies") ? true : false) ? (
            <div
              className={classNames(defaultcss.all, sty.box__bnWfK, {
                [sty.box__options_hasReplies__bnWfKmCLzA]: hasVariant(
                  variants,
                  "options",
                  "hasReplies"
                )
              })}
            />
          ) : null}
        </p.Stack>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__eKe6)}
      >
        <div className={classNames(defaultcss.all, sty.box__vFfd3)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__spfGw)}
          >
            <div className={classNames(defaultcss.all, sty.box__t2IPi)}>
              <div className={classNames(defaultcss.all, sty.box__zrBaU)}>
                <p.PlasmicSlot
                  defaultContents={"Dan Abramov"}
                  value={args.name}
                  className={classNames(sty.slotName)}
                />
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__g9AT)}>
              <p.PlasmicSlot
                defaultContents={"@dan_abramov"}
                value={args.username}
                className={classNames(sty.slotUsername)}
              />
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__r5K9M
              )}
            >
              {"·"}
            </div>

            <p.PlasmicSlot
              defaultContents={"9h"}
              value={args.timestamp}
              className={classNames(sty.slotTimestamp)}
            />
          </p.Stack>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__hpRck)}
            slot={"25"}
          >
            <IconIcon
              className={classNames(defaultcss.all, sty.svg__wnGya)}
              role={"img"}
            />
          </ActionButton>
        </div>

        <div className={classNames(defaultcss.all, sty.box__aBWwF)}>
          <p.PlasmicSlot
            defaultContents={
              "Is anyone intentionally using multiple versions of React? (Yeah I know this is generally frowned upon but sometimes you have no other good options for legacy reasons.) I want to know how your build is set up to handle code sharing."
            }
            value={args.children}
          />
        </div>

        <div className={classNames(defaultcss.all, sty.box___6Q9Kv)}>
          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__xf1Od)}
            options={["labeled"]}
            slot={"25"}
          >
            <ReplyIcon
              className={classNames(defaultcss.all, sty.svg__y4CWt)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton___48Jp)}
            options={["labeled"]}
            slot={"25"}
          >
            <RetweetIcon
              className={classNames(defaultcss.all, sty.svg__xCeFh)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__fRcjg)}
            options={["labeled"]}
            slot={"25"}
          >
            <LikeIcon
              className={classNames(defaultcss.all, sty.svg__rvtJ8)}
              role={"img"}
            />
          </ActionButton>

          <ActionButton
            className={classNames("__wab_instance", sty.actionButton__f6ReJ)}
            slot={"25"}
          >
            <ShareIcon
              className={classNames(defaultcss.all, sty.svg__qNPpQ)}
              role={"img"}
            />
          </ActionButton>
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "avatar"],
  avatar: ["avatar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTweet__ArgProps,
      internalVariantPropNames: PlasmicTweet__VariantProps
    });

    return PlasmicTweet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTweet";
  } else {
    func.displayName = `PlasmicTweet.${nodeName}`;
  }
  return func;
}

export const PlasmicTweet = Object.assign(
  // Top-level PlasmicTweet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    // Metadata about props expected for PlasmicTweet
    internalVariantProps: PlasmicTweet__VariantProps,
    internalArgProps: PlasmicTweet__ArgProps
  }
);

export default PlasmicTweet;
/* prettier-ignore-end */