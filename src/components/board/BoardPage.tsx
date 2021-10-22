import React, {useState} from 'react';
import styles from "./BoardPage.scss";
import {useParams} from "react-router-dom";
import {BoardSection} from "../../domain/BoardSection";
import {Section} from "./Section/Section";
import {Guid} from "js-guid";
import {BoardTask} from "../../domain/BoardTask";
import Lamp from "../shared/lamp/Lamp";

interface Props {

}

export const BoardPage = () => {
    const {id} = useParams<{ readonly id: string }>();

    const [sections, setSections] = useState<BoardSection[]>([]);

    const onAddSection = (section: BoardSection) => {
        setSections([...sections, section]);
    }

    return (
        <div className={styles.root}>
            <Lamp/>
            {
                sections.length == 0
                    ?
                    <Section section={{} as BoardSection} onAddSection={onAddSection}/>
                    :
                    sections.map((section) => <Section section={section} onAddSection={onAddSection} />)
            }
        </div>
    );
};
