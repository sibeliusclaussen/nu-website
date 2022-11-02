// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: L1sIfYbmTgu
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
import HeaderHeroPage from "../../HeaderHeroPage"; // plasmic-import: nF2ySVLpMIh/component
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import Button from "../../Button"; // plasmic-import: jGsW_a0TMYi/component
import Form from "../../Form"; // plasmic-import: 3MBHwfPUnY/component
import Footer from "../../Footer"; // plasmic-import: oAWDpYdN0s/component

import { useScreenVariants as useScreenVariants_0Uf6PR80TuUp8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0UF6pR80tuUP8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: L1sIfYbmTgu/css

import NatalieUnterstellLogoIcon from "./icons/PlasmicIcon__NatalieUnterstellLogo"; // plasmic-import: A4jG8WrNiS0Xj/icon
import _Icon from "./icons/PlasmicIcon___"; // plasmic-import: 6Vrd0S0dtKQ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon
import Group5Icon from "./icons/PlasmicIcon__Group5"; // plasmic-import: epgOKp3gZW/icon

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroPage?: p.Flex<typeof HeaderHeroPage>;
  columns?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  nuImageSeal?: p.Flex<"div">;
  nuImageSealWords?: p.Flex<"svg">;
  form?: p.Flex<typeof Form>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultContactProps {}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_0Uf6PR80TuUp8()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContact.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContact.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContact.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <HeaderHeroPage
            data-plasmic-name={"headerHeroPage"}
            data-plasmic-override={overrides.headerHeroPage}
            className={classNames("__wab_instance", sty.headerHeroPage)}
            coverPage={
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__oKrhT)}
                displayHeight={"100%" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/nu_website/images/fotoHalftone05Jpg.jpeg",
                  fullWidth: 2560,
                  fullHeight: 1641,
                  aspectRatio: undefined
                }}
              />
            }
            slot={
              <NavigationBar
                brand={
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__eLe
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <NatalieUnterstellLogoIcon
                      className={classNames(projectcss.all, sty.svg__bViG8)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                }
                className={classNames(
                  "__wab_instance",
                  sty.navigationBar__n78Ja
                )}
                closeButton={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___70U2)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/close.svg" as const}
                  />
                }
                forceOpenMenu={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? false
                    : false
                }
                itemsGap={32 as const}
                menuItems={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___6YYn)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__tMoVd
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__tnCdY
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
                        sty.link__bO3X
                      )}
                      component={Link}
                      href={`/about`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__sQn5Z
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___65Pj7
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
                        sty.link__jreUs
                      )}
                      component={Link}
                      href={`/clipping`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___6PvPz
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wCl05
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
                        sty.link__gtndA
                      )}
                      component={Link}
                      href={`/blog`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__jpFe6
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5NaDo
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
                        sty.link__nlbM
                      )}
                      component={Link}
                      href={`/contact`}
                      platform={"nextjs"}
                    >
                      <Button
                        active={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button__sLh0F
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__v2F0
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
                    {true ? (
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__inUzL)}
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
                        className={classNames(projectcss.all, sty.svg__srWDk)}
                        role={"img"}
                      />
                    ) : null}
                  </React.Fragment>
                }
                responsiveBreakpoint={768 as const}
              />
            }
          />

          {true ? (
            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__j9R6Y)}
              >
                <h3
                  data-plasmic-name={"h3"}
                  data-plasmic-override={overrides.h3}
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>
                      {"Give me a hello and let's change the world "}
                    </React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#F8D631" }}
                    >
                      {"together."}
                    </span>
                  </React.Fragment>
                </h3>

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? false
                    : true
                ) ? (
                  <div
                    data-plasmic-name={"nuImageSeal"}
                    data-plasmic-override={overrides.nuImageSeal}
                    className={classNames(projectcss.all, sty.nuImageSeal)}
                  >
                    <Group5Icon
                      data-plasmic-name={"nuImageSealWords"}
                      data-plasmic-override={overrides.nuImageSealWords}
                      className={classNames(
                        projectcss.all,
                        sty.nuImageSealWords
                      )}
                      role={"img"}
                    />
                  </div>
                ) : null}
              </p.Stack>

              <div className={classNames(projectcss.all, sty.column__zpJsO)}>
                <Form
                  data-plasmic-name={"form"}
                  data-plasmic-override={overrides.form}
                  className={classNames("__wab_instance", sty.form)}
                />
              </div>
            </div>
          ) : null}

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          >
            <NavigationBar
              brand={
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__jryQ
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <NatalieUnterstellLogoIcon
                    className={classNames(projectcss.all, sty.svg___888G)}
                    role={"img"}
                  />
                </p.PlasmicLink>
              }
              className={classNames(
                "__wab_instance",
                sty.navigationBar___3ScTu
              )}
              closeButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cAdCg)}
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
                  className={classNames(projectcss.all, sty.freeBox___89YFc)}
                >
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__ohur
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__mx6Dt
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
                      sty.link___5Famg
                    )}
                    component={Link}
                    href={`/about`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___59Eq
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tpT4M
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
                      sty.link__eipq3
                    )}
                    component={Link}
                    href={`/clipping`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__da9P3
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8G3ZA
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
                      sty.link__j8IqD
                    )}
                    component={Link}
                    href={`/blog`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__c2ZqS
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__f7Huq
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
                      sty.link___9AT2U
                    )}
                    component={Link}
                    href={`/contact`}
                    platform={"nextjs"}
                  >
                    <Button
                      active={true}
                      className={classNames(
                        "__wab_instance",
                        sty.button__kRtSo
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___0IAkk
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
                    className={classNames(sty.img__brNdv)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/menu.svg" as const}
                  />

                  <_Icon
                    className={classNames(projectcss.all, sty.svg__a1EnO)}
                    role={"img"}
                  />
                </React.Fragment>
              }
              responsiveBreakpoint={768 as const}
            />
          </Footer>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerHeroPage",
    "columns",
    "h3",
    "nuImageSeal",
    "nuImageSealWords",
    "form",
    "footer"
  ],
  headerHeroPage: ["headerHeroPage"],
  columns: ["columns", "h3", "nuImageSeal", "nuImageSealWords", "form"],
  h3: ["h3"],
  nuImageSeal: ["nuImageSeal", "nuImageSealWords"],
  nuImageSealWords: ["nuImageSealWords"],
  form: ["form"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroPage: typeof HeaderHeroPage;
  columns: "div";
  h3: "h3";
  nuImageSeal: "div";
  nuImageSealWords: "svg";
  form: typeof Form;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicContact__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroPage: makeNodeComponent("headerHeroPage"),
    columns: makeNodeComponent("columns"),
    h3: makeNodeComponent("h3"),
    nuImageSeal: makeNodeComponent("nuImageSeal"),
    nuImageSealWords: makeNodeComponent("nuImageSealWords"),
    form: makeNodeComponent("form"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
