import React from "react";
import styles from "./backgroundVideo.module.css"
import video from "../../assets/motivationGym.mp4";

class BackgroundVideo extends React.Component<any, any> {
    render() {
        return (
            <section className={styles.video}>
                <video className={styles.video_back} src={video} autoPlay loop muted />
            </section>
        );
    }
};

export default BackgroundVideo;