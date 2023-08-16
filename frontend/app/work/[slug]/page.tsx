import { rgbDataURL } from "@/utils/blurImage";
import { fetchAPI } from "@/utils/strapiAPI";
import { WorkParamsProps, WorkType } from "@/utils/types";
import { Metadata } from "next";
import Image from "next/image";

import styles from "./SingleWork.module.scss";

export async function generateMetadata({
  params,
}: WorkParamsProps): Promise<Metadata> {
  const work = await getSingleWork(params.slug);
  return { title: work?.attributes.Title };
}

export default async function WorkSingle({ params }: WorkParamsProps) {
  const { slug } = params;
  const work = await getSingleWork(slug);
  const { Title, Description, Media, updatedAt } = work?.attributes;
  return (
    <section className={styles.work}>
      <h3 className={styles.title}>{Title}</h3>
      <p className={styles.date}>{updatedAt}</p>
      <p className={styles.description}>{Description}</p>
      {Media?.data.map((media) => {
        const {
          id,
          attributes: { alternativeText, url, height, width },
        } = media;
        return (
          <Image
            alt={alternativeText}
            key={id}
            src={url}
            height={height}
            width={width}
            placeholder="blur"
            blurDataURL={rgbDataURL(53, 47, 35)}
            quality={100}
          />
        );
      })}
    </section>
  );
}

async function getSingleWork(slug: string): Promise<WorkType | void> {
  try {
    const allWorksRes = await fetchAPI(`/works`, { populate: "*" });
    const work = allWorksRes.data.find(
      (w: WorkType) => w.attributes.Slug === slug
    );
    return work;
  } catch (e) {
    console.error(`There was an error fetching the work with slug: ${slug}`);
  }
}
