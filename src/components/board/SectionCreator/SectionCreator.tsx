import React, {useState} from 'react';
import styles from "./SectionCreator.scss";

interface Props {
    onCloseCreator: () => void;
    onAddSectionName: (name: string) => void;
}

export const SectionCreator: React.FC<Props> = ({onCloseCreator, onAddSectionName}) => {
    const [inputValue, setInputValue] = useState("");

    const wrapperOnClose = () => {
        onCloseCreator();
    }

    const wrapperOnAddSectionName = () => {
        onAddSectionName(inputValue);
    }

    return (
        <div className={styles.root}>
            <input
                type="text"
                placeholder="Введите заголовок списка"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <div className={styles.bts}>
                <button onClick={wrapperOnAddSectionName} className={styles.add_section_bt}>Добавить список</button>
                <button onClick={wrapperOnClose}>X</button>
            </div>

        </div>
    );
};
