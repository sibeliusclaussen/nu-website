// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: nF2ySVLpMIh
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

import { useScreenVariants as useScreenVariants_0Uf6PR80TuUp8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0UF6pR80tuUP8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicHeaderHeroPage.module.css"; // plasmic-import: nF2ySVLpMIh/css

import NatalieUnterstellLogoIcon from "./icons/PlasmicIcon__NatalieUnterstellLogo"; // plasmic-import: A4jG8WrNiS0Xj/icon
import _Icon from "./icons/PlasmicIcon___"; // plasmic-import: 6Vrd0S0dtKQ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon
import Group5Icon from "./icons/PlasmicIcon__Group5"; // plasmic-import: epgOKp3gZW/icon

export type PlasmicHeaderHeroPage__VariantMembers = {};
export type PlasmicHeaderHeroPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderHeroPage__VariantsArgs;
export const PlasmicHeaderHeroPage__VariantProps = new Array<VariantPropType>();

export type PlasmicHeaderHeroPage__ArgsType = {
  children?: React.ReactNode;
  coverPage?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHeaderHeroPage__ArgsType;
export const PlasmicHeaderHeroPage__ArgProps = new Array<ArgPropType>(
  "children",
  "coverPage",
  "slot"
);

export type PlasmicHeaderHeroPage__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  nuImageSeal?: p.Flex<"div">;
  nuImageSealWords?: p.Flex<"svg">;
};

export interface DefaultHeaderHeroPageProps {
  children?: React.ReactNode;
  coverPage?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicHeaderHeroPage__RenderFunc(props: {
  variants: PlasmicHeaderHeroPage__VariantsArgs;
  args: PlasmicHeaderHeroPage__ArgsType;
  overrides: PlasmicHeaderHeroPage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0Uf6PR80TuUp8()
  });

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
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__fNc0W)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <NavigationBar
                brand={
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__uQn2L
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <NatalieUnterstellLogoIcon
                      className={classNames(projectcss.all, sty.svg__qwkxH)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                }
                className={classNames(
                  "__wab_instance",
                  sty.navigationBar__lnXw7
                )}
                closeButton={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yylup)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/close.svg" as const}
                  />
                }
                forceOpenMenu={true}
                itemsGap={32 as const}
                menuItems={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__wvE0T)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__j59S
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      <Button
                        active={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button__jvhNn
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        {"Home"}
                      </Button>
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__szkXo
                      )}
                      component={Link}
                      href={`/about`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__kawoK
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kxem
                          )}
                        >
                          {"About"}
                        </div>
                      </Button>
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xkuF5
                      )}
                      component={Link}
                      href={`/clipping`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___1P99L
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__odBEu
                          )}
                        >
                          {"Clipping"}
                        </div>
                      </Button>
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__xaay
                      )}
                      component={Link}
                      href={`/blog`}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__wD0Hc
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tgNh7
                          )}
                        >
                          {"Blog"}
                        </div>
                      </Button>
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__cIkEn
                      )}
                      component={Link}
                      href={`/contact`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__k8Uug
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wcvPm
                          )}
                        >
                          {"Contact"}
                        </div>
                      </Button>
                    </p.PlasmicLink>
                  </p.Stack>
                }
                openButton={
                  <React.Fragment>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___7LZyq)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"none" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={"https://static1.plasmic.app/menu.svg" as const}
                    />

                    <_Icon
                      className={classNames(projectcss.all, sty.svg___5EDyb)}
                      role={"img"}
                    />
                  </React.Fragment>
                }
                responsiveBreakpoint={768 as const}
              />
            ),

            value: args.slot
          })}
        </div>
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox__tmPis)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__zOnls)}>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(projectcss.all, projectcss.h1, sty.h1)}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Contact",
                value: args.children
              })}
            </h1>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? false : true
            ) ? (
              <div
                data-plasmic-name={"nuImageSeal"}
                data-plasmic-override={overrides.nuImageSeal}
                className={classNames(projectcss.all, sty.nuImageSeal)}
              >
                <Group5Icon
                  data-plasmic-name={"nuImageSealWords"}
                  data-plasmic-override={overrides.nuImageSealWords}
                  className={classNames(projectcss.all, sty.nuImageSealWords)}
                  role={"img"}
                />
              </div>
            ) : null}
          </div>
        ) : null}
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__hdBeE)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__v0P7A)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/nu_website/images/fotoHalftone03Jpg.jpeg",
                    fullWidth: 2560,
                    fullHeight: 1641,
                    aspectRatio: undefined
                  }}
                />
              ),

              value: args.coverPage
            })}
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "nuImageSeal", "nuImageSealWords"],
  h1: ["h1"],
  nuImageSeal: ["nuImageSeal", "nuImageSealWords"],
  nuImageSealWords: ["nuImageSealWords"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  nuImageSeal: "div";
  nuImageSealWords: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderHeroPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderHeroPage__VariantsArgs;
    args?: PlasmicHeaderHeroPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeaderHeroPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeaderHeroPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeaderHeroPage__ArgProps,
          internalVariantPropNames: PlasmicHeaderHeroPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeaderHeroPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderHeroPage";
  } else {
    func.displayName = `PlasmicHeaderHeroPage.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderHeroPage = Object.assign(
  // Top-level PlasmicHeaderHeroPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    nuImageSeal: makeNodeComponent("nuImageSeal"),
    nuImageSealWords: makeNodeComponent("nuImageSealWords"),

    // Metadata about props expected for PlasmicHeaderHeroPage
    internalVariantProps: PlasmicHeaderHeroPage__VariantProps,
    internalArgProps: PlasmicHeaderHeroPage__ArgProps
  }
);

export default PlasmicHeaderHeroPage;
/* prettier-ignore-end */
