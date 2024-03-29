// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jodssu5PmGaRR5vFRfdqKh
// Component: bpfnPRy8ZfZ
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
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowLink } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: Ds6UdKRHmq/codeComponent
import ArticlesClipping from "../../ArticlesClipping"; // plasmic-import: cqzLl1ryde/component
import { CmsRowImage } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: dj_Vc2QmFA/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import Footer from "../../Footer"; // plasmic-import: oAWDpYdN0s/component

import { useScreenVariants as useScreenVariants_0Uf6PR80TuUp8 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 0UF6pR80tuUP8/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_nu_website.module.css"; // plasmic-import: jodssu5PmGaRR5vFRfdqKh/projectcss
import sty from "./PlasmicBlog.module.css"; // plasmic-import: bpfnPRy8ZfZ/css

import NatalieUnterstellLogoIcon from "./icons/PlasmicIcon__NatalieUnterstellLogo"; // plasmic-import: A4jG8WrNiS0Xj/icon
import _Icon from "./icons/PlasmicIcon___"; // plasmic-import: 6Vrd0S0dtKQ/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: iemRUT8B78Y/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: tfqLjeUE7Y3/icon

export type PlasmicBlog__VariantMembers = {};
export type PlasmicBlog__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlog__VariantsArgs;
export const PlasmicBlog__VariantProps = new Array<VariantPropType>();

export type PlasmicBlog__ArgsType = {};
type ArgPropType = keyof PlasmicBlog__ArgsType;
export const PlasmicBlog__ArgProps = new Array<ArgPropType>();

export type PlasmicBlog__OverridesType = {
  root?: p.Flex<"div">;
  headerHeroPage?: p.Flex<typeof HeaderHeroPage>;
  cmsDataLoader?: p.Flex<typeof CmsQueryRepeater>;
  cmsEntryLink?: p.Flex<typeof CmsRowLink>;
  articlesClipping?: p.Flex<typeof ArticlesClipping>;
  cmsEntryImage?: p.Flex<typeof CmsRowImage>;
  nuArticleImage?: p.Flex<typeof p.PlasmicImg>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultBlogProps {}

function PlasmicBlog__RenderFunc(props: {
  variants: PlasmicBlog__VariantsArgs;
  args: PlasmicBlog__ArgsType;
  overrides: PlasmicBlog__OverridesType;

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
        <title key="title">{PlasmicBlog.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBlog.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBlog.pageMetadata.title}
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
                className={classNames(sty.img__k7QYa)}
                displayHeight={"100%" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/nu_website/images/fotoHalftone01Jpg.jpeg",
                  fullWidth: 2560,
                  fullHeight: 1640,
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
                      sty.link__xjg5H
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <NatalieUnterstellLogoIcon
                      className={classNames(projectcss.all, sty.svg__sDnCh)}
                      role={"img"}
                    />
                  </p.PlasmicLink>
                }
                className={classNames(
                  "__wab_instance",
                  sty.navigationBar__wkIRe
                )}
                closeButton={
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__fShLf)}
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
                    : true
                }
                itemsGap={32 as const}
                menuItems={
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vhcH1)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__dcZ5Z
                      )}
                      component={Link}
                      href={`/`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___2CcMa
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
                        sty.link___2A7G9
                      )}
                      component={Link}
                      href={`/about`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___9Nf7L
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ni9J6
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
                        sty.link__fZvrM
                      )}
                      component={Link}
                      href={`/clipping`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__eDetg
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yHhNe
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
                        sty.link__f5G7Q
                      )}
                      component={Link}
                      href={`/blog`}
                      platform={"nextjs"}
                    >
                      <Button
                        active={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button___5DlO5
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__oRLgg
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
                        sty.link__sPQl
                      )}
                      component={Link}
                      href={`/contact`}
                      platform={"nextjs"}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__qKy9U
                        )}
                        color={"clear" as const}
                        shape={"sharp" as const}
                        size={"minimal" as const}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mqIo
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
                        className={classNames(sty.img___5WR9D)}
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
                        className={classNames(projectcss.all, sty.svg__pBiNz)}
                        role={"img"}
                      />
                    ) : null}
                  </React.Fragment>
                }
                responsiveBreakpoint={768 as const}
              />
            }
          >
            {"Blog"}
          </HeaderHeroPage>

          <div className={classNames(projectcss.all, sty.freeBox__wOhzA)}>
            <CmsQueryRepeater
              data-plasmic-name={"cmsDataLoader"}
              data-plasmic-override={overrides.cmsDataLoader}
              className={classNames("__wab_instance", sty.cmsDataLoader)}
              desc={false}
              emptyMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xg4Lf
                      )}
                    >
                      {"No matching published entries found."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              forceEmptyState={false}
              forceLoadingState={false}
              limit={0 as const}
              loadingMessage={
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___1GZpu
                      )}
                    >
                      {"Loading..."}
                    </div>
                  )}
                </ph.DataCtxReader>
              }
              noLayout={true}
              useDraft={false}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <CmsRowLink
                    data-plasmic-name={"cmsEntryLink"}
                    data-plasmic-override={overrides.cmsEntryLink}
                    className={classNames("__wab_instance", sty.cmsEntryLink)}
                    field={"sourceLink" as const}
                    hrefProp={"href" as const}
                    prefix={"" as const}
                    suffix={"" as const}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link___5M3Tp
                      )}
                      component={Link}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <ArticlesClipping
                        data-plasmic-name={"articlesClipping"}
                        data-plasmic-override={overrides.articlesClipping}
                        category={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__cJBS
                            )}
                          />
                        }
                        className={classNames(
                          "__wab_instance",
                          sty.articlesClipping
                        )}
                        coverImage={
                          <CmsRowImage
                            data-plasmic-name={"cmsEntryImage"}
                            data-plasmic-override={overrides.cmsEntryImage}
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryImage
                            )}
                            srcProp={"src" as const}
                          >
                            <p.PlasmicImg
                              data-plasmic-name={"nuArticleImage"}
                              data-plasmic-override={overrides.nuArticleImage}
                              alt={""}
                              className={classNames(sty.nuArticleImage)}
                              displayHeight={"200px" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={"100%" as const}
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"100%" as const}
                              loading={"lazy" as const}
                              src={{
                                src: "/plasmic/nu_website/images/nuSection2.jpeg",
                                fullWidth: 4096,
                                fullHeight: 2448,
                                aspectRatio: undefined
                              }}
                            />
                          </CmsRowImage>
                        }
                        excerpt={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__o0VAh
                            )}
                            field={"excerpt" as const}
                          />
                        }
                        sourceData={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField___8Estr
                            )}
                            dateFormat={"D/M/YY h:mm A" as const}
                            field={"sourceData" as const}
                          />
                        }
                        sourceName={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__iBwD
                            )}
                            field={"sourceName" as const}
                          />
                        }
                        sourceWebsite={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField__t7RW
                            )}
                            field={"sourceWebsite" as const}
                          />
                        }
                        title={
                          <CmsRowField
                            className={classNames(
                              "__wab_instance",
                              sty.cmsEntryField___8Tkut
                            )}
                            field={"title" as const}
                          />
                        }
                      />
                    </p.PlasmicLink>
                  </CmsRowLink>
                )}
              </ph.DataCtxReader>
            </CmsQueryRepeater>
          </div>

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
                    sty.link__hMidO
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <NatalieUnterstellLogoIcon
                    className={classNames(projectcss.all, sty.svg__qakEs)}
                    role={"img"}
                  />
                </p.PlasmicLink>
              }
              className={classNames("__wab_instance", sty.navigationBar__dEish)}
              closeButton={
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__f2Diw)}
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
                  className={classNames(projectcss.all, sty.freeBox__ryZf0)}
                >
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link___6T5X
                    )}
                    component={Link}
                    href={`/`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__cHZy8
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
                      sty.link__yDLp
                    )}
                    component={Link}
                    href={`/about`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__fzS7A
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wukzR
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
                      sty.link__iZjr0
                    )}
                    component={Link}
                    href={`/clipping`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__zrMg0
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___0IWe
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
                      sty.link__onpaH
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__tf6Oo
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___22JA
                        )}
                      >
                        {"Portfolio"}
                      </div>
                    </Button>
                  </p.PlasmicLink>

                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      sty.link__i5VJt
                    )}
                    component={Link}
                    href={`/blog`}
                    platform={"nextjs"}
                  >
                    <Button
                      active={true}
                      className={classNames("__wab_instance", sty.button__sLRs)}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__b7XsB
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
                      sty.link__jandY
                    )}
                    component={Link}
                    href={`/contact`}
                    platform={"nextjs"}
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__bQmws
                      )}
                      color={"clear" as const}
                      shape={"sharp" as const}
                      size={"minimal" as const}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__d8Wxa
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
                    className={classNames(sty.img__ePwun)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    src={"https://static1.plasmic.app/menu.svg" as const}
                  />

                  <_Icon
                    className={classNames(projectcss.all, sty.svg__xmPv)}
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
    "cmsDataLoader",
    "cmsEntryLink",
    "articlesClipping",
    "cmsEntryImage",
    "nuArticleImage",
    "footer"
  ],
  headerHeroPage: ["headerHeroPage"],
  cmsDataLoader: [
    "cmsDataLoader",
    "cmsEntryLink",
    "articlesClipping",
    "cmsEntryImage",
    "nuArticleImage"
  ],
  cmsEntryLink: [
    "cmsEntryLink",
    "articlesClipping",
    "cmsEntryImage",
    "nuArticleImage"
  ],
  articlesClipping: ["articlesClipping", "cmsEntryImage", "nuArticleImage"],
  cmsEntryImage: ["cmsEntryImage", "nuArticleImage"],
  nuArticleImage: ["nuArticleImage"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerHeroPage: typeof HeaderHeroPage;
  cmsDataLoader: typeof CmsQueryRepeater;
  cmsEntryLink: typeof CmsRowLink;
  articlesClipping: typeof ArticlesClipping;
  cmsEntryImage: typeof CmsRowImage;
  nuArticleImage: typeof p.PlasmicImg;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlog__VariantsArgs;
    args?: PlasmicBlog__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBlog__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicBlog__ArgProps,
          internalVariantPropNames: PlasmicBlog__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlog";
  } else {
    func.displayName = `PlasmicBlog.${nodeName}`;
  }
  return func;
}

export const PlasmicBlog = Object.assign(
  // Top-level PlasmicBlog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroPage: makeNodeComponent("headerHeroPage"),
    cmsDataLoader: makeNodeComponent("cmsDataLoader"),
    cmsEntryLink: makeNodeComponent("cmsEntryLink"),
    articlesClipping: makeNodeComponent("articlesClipping"),
    cmsEntryImage: makeNodeComponent("cmsEntryImage"),
    nuArticleImage: makeNodeComponent("nuArticleImage"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicBlog
    internalVariantProps: PlasmicBlog__VariantProps,
    internalArgProps: PlasmicBlog__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Blog",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlog;
/* prettier-ignore-end */
