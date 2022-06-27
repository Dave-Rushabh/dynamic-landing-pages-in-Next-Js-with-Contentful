import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = ({ navbar, logo }) => {
  return (
    <>
      <div className={styles.navMain}>
        <div className={styles.logoContainer}>
          <Image src={`https:${logo}`} layout="fill" />
        </div>
        {navbar?.map((item) => {
          return (
            <div key={item.fields.slug} className={styles.navContaier}>
              <Link href={item.fields.slug}>
                <a>
                  <div className={styles.navField}>{item.fields.name}</div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
