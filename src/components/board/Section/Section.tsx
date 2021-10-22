import React, {useState} from 'react';
import styles from "./Section.scss";
import {BoardSection} from "../../../domain/BoardSection";
import {Task} from "../Task/Task";
import {SectionCreator} from "../SectionCreator/SectionCreator";

interface Props {
    section: BoardSection;
    onAddSection: (section: BoardSection) => void;
}

export const Section: React.FC<Props> = ({section, onAddSection}) => {
    const [isCreateSection, setIsCreateSection] = useState(false);
    console.log(isCreateSection);

    const wrapperAddSection = () => {

    }

    const renderSectionForm = () => {
        setIsCreateSection(true);
        console.log("form")
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
                        <SectionCreator onCloseCreator={onCloseSectionCreator}/>
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
