import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function getTags() {
  const tags = cloudinary.api
    .tags()
    .then((value) => {
      return value;
    })
    .catch((error) => console.log(error));
  return tags;
}

async function getAllResourcesByTags() {
  const tags = await getTags();
  let allResources: [] = [];
  const promises = tags.tags.map(async (tag: string) => {
    const resources = await getResources(tag);
    return [
      ...allResources,
      {
        tag: tag,
        resources: resources?.resources.map((resource) => resource.secure_url),
      },
    ];
  });

  return Promise.all(promises);
}

async function getResources(tag: string) {
  const resources = cloudinary.api
    .resources_by_tag(tag)
    .then((value) => {
      return value;
    })
    .catch((error) => console.log(error));
  return resources;
}

async function getAllResourcesByPrefix() {
  const tags = await getTags();
  let allResources: [] = [];
  const promises = tags.tags.map(async (tag: string) => {
    const resources = await getResourcesByPrefix(`${tag}/front`);
    return [
      ...allResources,
      {
        tag: tag,
        resources: resources?.resources.map(
          (resource: any) => resource.secure_url
        ),
      },
    ];
  });

  return Promise.all(promises);
}

async function getResourcesByPrefix(prefix: string) {
  const resources = cloudinary.api
    .resources({ prefix: prefix, tags: true, type: "upload" })
    .then((value) => {
      return value;
    })
    .catch((error) => console.log(error));

  return resources;
}

export { getTags, getAllResourcesByTags, getAllResourcesByPrefix };
