import React from "react";
import Image from "next/image";
import styles from "./LandingPageDeliver.module.css";
import { format } from "date-fns";
import cn from "classnames";
import { BsFillChatRightTextFill } from "react-icons/bs";

const LandingPageDeliver = ({ page }) => {
  return (
    <>
      <div className={styles.main}>
        {page.backgroundImage && (
          <div className={styles.imgContainer}>
            <Image
              src={`https:${page?.backgroundImage?.fields?.file?.url}`}
              layout="fill"
              quality={100}
              className={styles.img}
            />
          </div>
        )}
        <div className={styles.details}>
          <div className={styles.headerContainer}>
            <h1 className={styles.heading}>{page?.headerText}</h1>
          </div>
        </div>

        <div className={styles.cardContainer}>
          {page?.cards?.map((item) => {
            return (
              <div
                key={item.fields.cardDescription}
                className={styles.cardInner}
              >
                <div className={cn(styles.cardText, styles.mainText)}>
                  {item?.fields?.cardDescription}
                </div>
                <div className={cn(styles.cardText, styles.subText)}>
                  {`Open discussion till: ${format(
                    new Date(item?.fields?.date),
                    "do MMM yyyy"
                  )}`}
                </div>
                <div className={cn(styles.cardText, styles.cardButton)}>
                  <button>Join discussion</button>
                  {page?.slug === "home" && <BsFillChatRightTextFill />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LandingPageDeliver;
