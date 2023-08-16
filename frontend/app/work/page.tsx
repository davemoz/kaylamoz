import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { fetchAPI } from "@/utils/strapiAPI";
import { CategoryType, WorkType } from "@/utils/types";
import { rgbDataURL } from "@/utils/blurImage";

import styles from "./Work.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Work",
};

export default async function Work() {
  const { works, categories } = await getAllWorkAndCategories();
  return (
    <section>
      {Object.keys(categories).length > 0 && (
        <>
          Categories
          <ul className={styles.categories}>
            {categories.map((category) => {
              const {
                attributes: { Name },
              } = category;
              return <li key={Name}>{Name}</li>;
            })}
          </ul>
        </>
      )}
      {Object.keys(works).length > 0 && (
        <ul className={styles.works}>
          {works.map((work: WorkType) => {
            const {
              id,
              attributes: { Title, Media, Slug },
            } = work;
            return (
              <li className={styles.work} key={id}>
                <Link href={`/work/${Slug}`}>
                  {Media?.data.map((media) => {
                    const {
                      id,
                      attributes: { alternativeText, url, height, width },
                    } = media;
                    return (
                      <Image
                        alt={alternativeText}
                        className={styles.image}
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
                  <h3 className={styles.title}>{Title}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

async function getAllWorkAndCategories(): Promise<{
  works: WorkType[];
  categories: CategoryType[];
}> {
  const [worksRes, categoriesRes] = await Promise.all([
    fetchAPI("/works", { populate: "*" }),
    fetchAPI("/categories", { populate: "*" }),
  ]);
  return {
    works: worksRes.data,
    categories: categoriesRes.data,
  };
}
