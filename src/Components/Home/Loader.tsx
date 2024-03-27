import styles from "./Loader.module.css";
import muLoader from "./assets/MuLoader.gif";

const MuLoader = () => {
    return (
        <div className={styles.muLoaderContainer}>
            <img src={muLoader} alt="" className={styles.muLoader} />
        </div>
    );
};

export default MuLoader;