import { createClient } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

// For Fetching the slug of all Landing Pages and returns the value to the getStaticPath function when required
export const fetchAllLandingPages = async () => {
  if (accessToken) {
    const entries = await client.getEntries({
      content_type: "landingPage", // give your content model name here
    });

    console.log(entries, "fetchAllLandingPages()");

    if (entries.items) {
      return entries.items.map((individualLandingPage) => {
        return {
          params: {
            slug: individualLandingPage.fields.slug,
          },
        };
      });
    } else {
      console.error(`Error Fetching the Landing Pages`);
    }
  } else {
    console.error(`Access Token Invalid`);
  }
};

// For fetching the slug and corresponding data of each Landing Page and sending to the getStaticProps function when required
export const fetchLandingPageBySlug = async (slug = "home") => {
  return await fetchEntries("landingPage", slug);
};

// For Fetching Data of individual Slug Page
export const fetchEntries = async (contentType, slug) => {
  if (accessToken) {
    const entries = await client.getEntries({
      content_type: contentType,
      "fields.slug": slug,
    });

    if (entries.items) {
      return entries.items;
    } else {
      console.error(`Error Fetching the ${slug} page data`);
    }
  } else {
    console.error(`Access Token Invalid`);
  }
};

// For fetching the Navbar data
export const fetchAdditionContent = async () => {
  if (accessToken) {
    const entries = await client.getEntries({
      content_type: "contentForAdditionalContent",
    });

    if (entries.items) {
      return entries.items;
    } else {
      console.error(`Error Fetching  page data`);
    }
  } else {
    console.error(`Access Token Invalid`);
  }
};
