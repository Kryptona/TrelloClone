import React from 'react';
import styles from "./BoardPage/BoardPage.scss";
import {useParams} from "react-router-dom";


export const BoardPage = () => {
    let {id} = useParams<{ readonly id: string }>();
    console.log("Here!");
    return (
        <div className={styles.root}>
            <span>Hello!</span>
        </div>
    );
};
