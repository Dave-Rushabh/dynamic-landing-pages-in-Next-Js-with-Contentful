import React from "react";
import styles from "./AdditionalContent.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { format } from "date-fns";
import Blogs from "../Blogs/Blogs";

const AdditonalContent = ({ page, additionalData }) => {
  const news = additionalData[1]?.fields?.details;
  const blogs = additionalData[0]?.fields?.details;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.news}>
          {page.slug === "home" && (
            <>
              <div className={styles.title}>News</div>
              {news?.map((item, index) => {
                const { date, about, image, name, slug } = item.fields;
                return (
                  <div className={styles.individual} key={index}>
                    <div className={styles.header}>
                      <div className={styles.hName}>
                        {index + 1}.) {name}
                      </div>
                      <span>{`[${format(
                        new Date(date),
                        "do MMM yyyy"
                      )}]`}</span>
                    </div>
                    <div className={styles.img}>
                      <Image
                        src={`https:${image.fields.file.url}`}
                        height={400}
                        width={750}
                      />
                    </div>
                    <div className={styles.para}>
                      {documentToReactComponents(about)}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={styles.others}>
          {page.slug === "home" && (
            <>
              <div className={styles.title}>Blogs</div>
              <Blogs blogs={blogs} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdditonalContent;
