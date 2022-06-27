import LandingPage from "../componnets/LandingPage/LandingPage";
import Navbar from "../componnets/Navbar/Navbar";
import AdditonalContent from "../componnets/Additional Content/AdditonalContent";

import {
  fetchAdditionContent,
  fetchAllLandingPages,
  fetchLandingPageBySlug,
} from "../API/contentful";

export const getStaticPaths = async () => {
  const paths = await fetchAllLandingPages();
  return {
    paths,
    fallback: false,
  };
};

// <params> is destrutured from the contect object that we get from the getStaticPaths function
export const getStaticProps = async ({ params }) => {
  const landingPage = await fetchLandingPageBySlug(params.slug);
  const additionalData = await fetchAdditionContent();

  if (landingPage.length > 0) {
    return {
      props: {
        page: landingPage[0].fields,
        additionalData: additionalData,
      },
    };
  } else {
    return {
      props: {
        page: {},
        additionalData: {},
      },
    };
  }
};

const LandingPageSlug = ({ page, additionalData }) => {
  return (
    <>
      <Navbar
        navbar={page.navbar}
        logo={page?.companyLogo?.fields?.file?.url}
      />
      <LandingPage page={page} />
      <AdditonalContent additionalData={additionalData} page={page} />
    </>
  );
};

export default LandingPageSlug;
