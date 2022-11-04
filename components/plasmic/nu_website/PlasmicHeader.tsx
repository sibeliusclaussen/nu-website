// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: A6pZz1HLj4
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import Button from "../../Button"; // plasmic-import: jGsW_a0TMYi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: A6pZz1HLj4/css

import NatalieUnterstellLogoIcon from "./icons/PlasmicIcon__NatalieUnterstellLogo"; // plasmic-import: A4jG8WrNiS0Xj/icon
import _Icon from "./icons/PlasmicIcon___"; // plasmic-import: 6Vrd0S0dtKQ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>("children");

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <NavigationBar
            brand={
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link__oEKee
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                <NatalieUnterstellLogoIcon
                  className={classNames(projectcss.all, sty.svg__wBSh)}
                  role={"img"}
                />
              </p.PlasmicLink>
            }
            className={classNames("__wab_instance", sty.navigationBar__x6Hrg)}
            closeButton={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rif7R)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                src={"https://static1.plasmic.app/close.svg" as const}
              />
            }
            itemsGap={32 as const}
            menuItems={
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__cCeNo)}
              >
                <Button
                  active={true}
                  className={classNames("__wab_instance", sty.button__rvJjm)}
                  color={"clear" as const}
                  link={`/`}
                  shape={"sharp" as const}
                  size={"minimal" as const}
                >
                  {"Home"}
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__hlNv0)}
                  color={"clear" as const}
                  link={`/about`}
                  shape={"sharp" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vcU7K
                    )}
                  >
                    {"About"}
                  </div>
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__pfNf)}
                  color={"clear" as const}
                  link={`/timeline`}
                  shape={"sharp" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ynkI5
                    )}
                  >
                    {"Timeline"}
                  </div>
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__oOf4U)}
                  color={"clear" as const}
                  link={`/clipping`}
                  shape={"sharp" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sxYs
                    )}
                  >
                    {"Clipping"}
                  </div>
                </Button>

                <Button
                  className={classNames("__wab_instance", sty.button__pmyIc)}
                  color={"clear" as const}
                  link={`/contact`}
                  shape={"sharp" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wvkFv
                    )}
                  >
                    {"Contact"}
                  </div>
                </Button>
              </p.Stack>
            }
            openButton={
              <React.Fragment>
                {true ? (
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__qcwCp)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/menu.svg" as const}
                  />
                ) : null}
                {true ? (
                  <_Icon
                    className={classNames(projectcss.all, sty.svg___26P7)}
                    role={"img"}
                  />
                ) : null}
              </React.Fragment>
            }
            responsiveBreakpoint={768 as const}
          />
        ),

        value: args.children
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
