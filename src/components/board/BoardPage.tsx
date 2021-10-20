import React, {useState} from 'react';
import styles from "./BoardPage.scss";
import {useParams} from "react-router-dom";
import {BoardSection} from "../../domain/BoardSection";


export const BoardPage = () => {
    const {id} = useParams<{ readonly id: string }>();

    const [sections, setSections] = useState<BoardSection[]>([]);

    console.log("Here!");
    return (
        <div className={styles.root}>
            <span>Hello!</span>
        </div>
    );
};
