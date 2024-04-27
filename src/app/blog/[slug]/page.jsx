import styles from "./singlePost.module.css"
import Image from "next/image"
const singlePostPage  = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/about.png" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
            <Image className={styles.avatar} src="/noavatar.png" alt="" width={50} height={50} />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailvalue}>Terry Jefferson</span>
            </div>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailvalue}>01.01.2024</span>
            </div>
          </div>
          <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perspiciatis autem corporis neque, 
            ullam obcaecati atque iste similique aut. 
            Modi sed obcaecati suscipit ratione similique totam quisquam vero aliquid a.
          </div>
        </div>
      </div>
    )
}

export default singlePostPage