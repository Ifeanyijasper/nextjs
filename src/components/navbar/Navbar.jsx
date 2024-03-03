import Links from "./Links/links";
import styles from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className="syles.logo">Logo</div>
            <div>
                <Links/>
            </div>
            
        </div>
    )

  };
  
  export default Navbar