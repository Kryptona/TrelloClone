import React, {useState} from 'react';
import styles from './SectionCreator.scss';

interface Props {
  onAddSectionName: (name: string) => void;
  // onAdd: (section: BoardSection) => void;
}

export const SectionCreator: React.FC<Props> = ({onAddSectionName}) => {
  const [name, setName] = useState('');
  const [isCreateSection, setIsCreateSection] = useState(false);

  const wrapperOnAddSectionName = () => {
    onAddSectionName(name);
    setIsCreateSection(false);
    setName('');
  };

  return (
    <div className={styles.root}>
      {isCreateSection ? (
        <div className={styles.container}>
          <input
            type="text"
            placeholder="Введите заголовок списка"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className={styles.bts}>
            <button onClick={wrapperOnAddSectionName} className={styles.add_section_bt}>
              Добавить список
            </button>
            <button onClick={() => setIsCreateSection(false)}>X</button>
          </div>
        </div>
      ) : (
        <button className={styles.add_section} onClick={() => setIsCreateSection(true)}>
          + Добавить колонку
        </button>
      )}
    </div>
  );
};
