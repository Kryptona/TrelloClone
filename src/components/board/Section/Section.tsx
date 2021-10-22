import React, {useState} from 'react';
import styles from "./Section.scss";
import {BoardSection} from "../../../domain/BoardSection";
import {Task} from "../Task/Task";
import {SectionCreator} from "../SectionCreator/SectionCreator";
import {Guid} from "js-guid";
import {BoardTask} from "../../../domain/BoardTask";

interface Props {
    section: BoardSection;
    onAddSection: (section: BoardSection) => void;
}

export const Section: React.FC<Props> = ({section, onAddSection}) => {
    const [isCreateSection, setIsCreateSection] = useState(false);
    const [title, setTitle] = useState(""); //чтобы ы будущем динамически исправлять название

    const wrapperOnAddSection = (name: string) => {
        onAddSection({
            id: new Guid(),
            boardId: null,
            name: name,
            tasks: [],
        })
        setIsCreateSection(false);
        setTitle(name);
    }

    const renderSectionForm = () => {
        setIsCreateSection(true);
    }

    const onCloseSectionCreator = () => {
        setIsCreateSection(false);
    }

    return (
        <div className={styles.root}>
            {Object.keys(section).length == 0
                ?
                <div className={styles.empty_section}>
                    {isCreateSection
                        ?
                        <SectionCreator onCloseCreator={onCloseSectionCreator} onAddSectionName={wrapperOnAddSection} />
                        :
                        <button className={styles.add_section} onClick={renderSectionForm}>+ Добавить колонку
                        </button>
                    }
                </div>
                :
                <div>
                    <div className={styles.title}>
                        {section.name}
                    </div>
                    {section.tasks.map((task, index) => <Task key={index} task={task}/>)}
                    <button>+ Добавить карточку</button>
                </div>
            }
        </div>
    );
};
