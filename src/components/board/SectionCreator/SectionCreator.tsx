import React, {useState} from 'react';
import styles from "./SectionCreator.scss";

interface Props {
    onAddSectionName: (name: string) => void;
}

export const SectionCreator: React.FC<Props> = ({onAddSectionName}) => {
    const [inputValue, setInputValue] = useState("");
    const [isCreateSection, setIsCreateSection] = useState(false);

    const wrapperCreatorState = () => {
        setIsCreateSection(!isCreateSection);
    }

    const wrapperOnAddSectionName = () => {
        onAddSectionName(inputValue);
    }

    return (

        <div className={styles.root}>
            {isCreateSection
                ?
                <div className={styles.container}>
                    <input
                        type="text"
                        placeholder="Введите заголовок списка"
                        value={inputValue}
                        onChange={event => setInputValue(event.target.value)}
                    />
                    <div className={styles.bts}>
                        <button onClick={wrapperOnAddSectionName} className={styles.add_section_bt}>Добавить список
                        </button>
                        <button onClick={wrapperCreatorState}>X</button>
                    </div>
                </div>
                :
                <button className={styles.add_section} onClick={wrapperCreatorState}>+ Добавить колонку
                </button>
            }
        </div>
    );
};
