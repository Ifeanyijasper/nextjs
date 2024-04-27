import Image from "next/image";
import styles from "./about.module.css";
const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>WE create digital ideas that are bigger, bolder, braver and better. 
        We believ in good ideas flexibility and precision. We are worlds best consulting team for 
        digital solution to bussinesses</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>234 k+</h1>
            <p>People reached</p>
          </div>
          <div className={styles.box}>
            <h1>5 k+</h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
      <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
    );
  };
  
  export default Aboutpage