import React from "react";
import styles from "./citation.module.css";
import { citationSchwarzenegger } from "../../consts/consts";

type TState = {
    quote: string;
    author: string
}

class Citation extends React.Component<any, TState> {
    constructor(props: any) {
        super(props);
        this.state = {
            quote: 'There are no shortcuts—everything is reps, reps, reps.',
            author: 'Arnold Schwarzenegger',
        }

        this._getRandomCitation = this._getRandomCitation.bind(this);
    }

    componentDidMount() {
        this._getRandomCitation(citationSchwarzenegger);
    }

    _getRandomCitation(arr: {citation: string, author: string}[]) {
        const arrIndex = Math.floor(Math.random() * arr.length);
        this.setState({
            quote: arr[arrIndex].citation,
            author: arr[arrIndex].author
        })
    }

    render() {
        return (
            <section className={styles.citation}>
                <div className={styles.citation__flexbox}>
                    <p className={styles.citation__text}>{this.state.quote}</p>
                    <cite className={styles.citation__author}>{this.state.author}</cite>
                </div>
            </section>
        );
    }
}

export default Citation;