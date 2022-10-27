import React, {FC} from "react";
import styles from "./backgroundVideo.module.css"
import video from "../../assets/motivationGym.mp4";

const BackgroundVideo: FC = (): JSX.Element => {

    return (
        <section className={styles.video}>
            <video className={styles.video_back} src={video} autoPlay loop muted/>
        </section>
    );

};

export default BackgroundVideo;