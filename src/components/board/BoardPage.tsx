import React, {useState} from 'react';
import styles from "./BoardPage.scss";
import {useParams} from "react-router-dom";
import {BoardSection} from "../../domain/BoardSection";
import {Section} from "./Section/Section";
import {Guid} from "js-guid";
import {BoardTask} from "../../domain/BoardTask";
import Lamp from "../shared/lamp/Lamp";
import {SectionCreator} from "./SectionCreator/SectionCreator";


export const BoardPage = () => {
    const {id} = useParams<{ readonly id: string }>();

    const [sections, setSections] = useState<BoardSection[]>([]);


    const wrapperOnAddSection = (name: string) => {
        onAddSection({
            id: new Guid(),
            boardId: new Guid(id),
            name: name,
            tasks: [],
        })
        // setIsCreateSection(false);
        // setTitle(name);
    }

    const onAddSection = (section: BoardSection) => {
        setSections([...sections, section])
    }

    return (
        <div className={styles.root}>
            <Lamp/>

            <div className={styles.container}>
                {sections.map((section) => <Section section={section} onAddSection={onAddSection} boardId={new Guid(id)}/>)}
                <SectionCreator onAddSectionName={wrapperOnAddSection}/>
            </div>
            {/*<Section section={{} as BoardSection} onAddSection={onAddSection} boardId={new Guid(id)}/>*/}


        </div>
    );
};
