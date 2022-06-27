import React from "react";
import styles from "./Blogs.module.css";
import Image from "next/image";

const Blogs = ({ blogs }) => {
  console.log(blogs, "blogs");
  return (
    <>
      <div className={styles.blogs}>
        {blogs.map((blog) => {
          const { image, name } = blog.fields;

          return (
            <div className={styles.blogBody}>
              <Image
                className={styles.blogImage}
                src={`https:${image.fields.file.url}`}
                height={350}
                width={400}
              />
              <div className={styles.blogAbout}>
                <p className={styles.blogTitle}>{name}</p>
                <p className={styles.readBlog}>Read this Blog</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
