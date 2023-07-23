import { Card, Layout, Tabs, TabsList, TabsTrigger } from "~/components";
import { createMetaData, createSitemap } from "~/utils";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import {
  getTags,
  getAllResourcesByTags,
  getAllResourcesByPrefix,
} from "~/utils/cloudinary";
import { useCallback, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const loader: LoaderFunction = async () => {
  const tags = await getTags();
  const resources = await getAllResourcesByTags();
  const frontResources = await getAllResourcesByPrefix();

  return json({
    tags: tags.tags,
    resources: resources,
    frontResources: frontResources,
  });
};

export const meta = createMetaData({
  title: "Fotoboek",
  description: "Een fotoboek van Gezinshuizen de wij.",
});

export const handle = createSitemap("/fotoboek", 0.1);

export default function Route() {
  const { tags, resources, frontResources } = useLoaderData<typeof loader>();
  const [tag, setTag] = useState<string>("sample");
  const [currentResources, setCurrentResources] = useState<[]>([]);

  const getRecourcesByTag = useCallback(
    (tag: string) => {
      const mappedResources = resources.map((resource: any) => resource[0]);
      const resourcesByTag = mappedResources.filter(
        (resource: any) => resource.tag === tag
      )[0].resources;
      return resourcesByTag;
    },
    [resources]
  );

  const getFrontImage = useCallback(
    (tag: string) => {
      const mappedResources = frontResources.map(
        (resource: any) => resource[0]
      );
      const resourcesByTag = mappedResources.filter(
        (resource: any) => resource.tag === tag
      )[0].resources;
      return resourcesByTag;
    },
    [frontResources]
  );

  useEffect(() => {
    setCurrentResources(getRecourcesByTag(tag));
  }, [tag, getRecourcesByTag]);

  const reformatTagString = (str: string) => {
    const capitlizeFirstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    const reformattedCardTitle = capitlizeFirstLetter.replace(/-/g, " ");
    return reformattedCardTitle;
  };

  return (
    <Layout>
      <section>
        <Tabs
          onValueChange={(value: string) => setTag(value)}
          className="w-full"
        >
          <TabsList className="mb-2">
            {tags &&
              tags.map((tagAll: string) => {
                return (
                  <TabsTrigger
                    key={tagAll}
                    data-state={tagAll === tag ? "active" : "inactive"}
                    value={tagAll}
                  >
                    {tagAll}
                  </TabsTrigger>
                );
              })}
          </TabsList>
        </Tabs>
        <div className="flex flex-wrap gap-4">
          {tags &&
            tags.map((tagAll: string) => {
              return (
                <Card
                  className="flex max-w-xs cursor-pointer flex-col justify-center rounded-lg hover:text-amber-600"
                  key={tagAll}
                  onClick={() => setTag(tagAll)}
                >
                  <img className="rounded-t-lg" src={getFrontImage(tagAll)} />
                  <h5 className="flex justify-center">
                    {reformatTagString(tagAll)}
                  </h5>
                </Card>
              );
            })}
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {currentResources && currentResources.map(img => <SwiperSlide>{<img src={img} />}</SwiperSlide>)}
            <SwiperSlide>Test</SwiperSlide>
        </Swiper>
      </section>
    </Layout>
  );
}
