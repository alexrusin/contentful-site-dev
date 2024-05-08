import * as contentful from "contentful";

const space_id = process.env.SPACE_ID || "";
const access_token = process.env.DELIVERY_TOKEN || "";
const preview_token = process.env.PREVIEW_TOKEN || "";
const environment = process.env.ENVIRONMENT;

const getOptions = (is_preview: boolean): contentful.CreateClientParams => {
  return {
    space: space_id,
    host: is_preview ? "preview.contentful.com" : undefined,
    accessToken: is_preview ? preview_token : access_token,
    environment: environment ? environment : "master",
  };
};

export async function getEntriesByContentType<T>(
  contentType: string,
  slug?: string
): Promise<T[]> {
  const options = getOptions(false);

  try {
    const contentfulClient = contentful.createClient(options); // https://contentful.github.io/contentful.js/contentful/9.1.9/contentful.html#.createClient
    if (contentfulClient) {
      let params = { content_type: contentType, include: 5 }; //include -> to retrieve related data(linked entries) in same request, number of levels is 3

      if (slug) {
        //@ts-ignore
        params["fields.slug"] = slug;
      }

      const entries = await contentfulClient.getEntries(params); // https://contentful.github.io/contentful.js/contentful/9.1.9/ContentfulClientAPI.html#.getEntries
      const contentTypeEntries = entries.items as T[];
      return contentTypeEntries;
    } else {
      return [];
    }
  } catch (error) {
    console.log(`Get content ${contentType} error`, error);
    return [];
  }
}
