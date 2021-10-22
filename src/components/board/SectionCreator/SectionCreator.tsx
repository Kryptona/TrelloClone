import React, {useState} from 'react';
import styles from "./SectionCreator.scss";

interface Props{
    onCloseCreator: () => void;
}

export const SectionCreator: React.FC<Props> = ({onCloseCreator}) => {
    const [inputValue, setInputValue] = useState("");

    const wrapperOnClose = () => {
        onCloseCreator();
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
                <button className={styles.add_section_bt}>Добавить список</button>
                <button onClick={wrapperOnClose}>X</button>
            </div>

        </div>
    );
};
