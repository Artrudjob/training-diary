import React, {FC, useState, useEffect} from "react";
import styles from "./citation.module.css";
import { citationSchwarzenegger } from "../../consts/consts";

const Citation: FC = (): JSX.Element => {

    const [quote, setQuote] = useState<string>("There are no shortcuts—everything is reps, reps, reps.");
    const [author, setAuthor] = useState<string>("Arnold Schwarzenegger");

    useEffect(() => {
        getRandomCitation(citationSchwarzenegger)  ;
    }, [])

    function getRandomCitation(arr: {citation: string, author: string}[]) {
        const arrIndex = Math.floor(Math.random() * arr.length);
        setQuote(arr[arrIndex].citation);
        setAuthor(arr[arrIndex].author);
    }

        return (
            <section className={styles.citation}>
                <div className={styles.citation__flexbox}>
                    <p className={styles.citation__text}>{quote}</p>
                    <cite className={styles.citation__author}>{author}</cite>
                </div>
            </section>
        );

}

export default Citation;