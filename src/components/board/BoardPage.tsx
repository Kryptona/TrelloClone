import React, {useEffect, useState} from 'react';
import styles from './BoardPage.scss';
import {useParams} from 'react-router-dom';
import {BoardSection} from '../../domain/BoardSection';
import {Section} from './Section/Section';
import Lamp from '../shared/lamp/Lamp';
import {SectionCreator} from './SectionCreator/SectionCreator';
import {guid} from '../../utils/guidUtils';
import {boardsApi} from '../../api/boardsApi';

export const BoardPage = () => {
  const {id} = useParams<{readonly id: string}>();

  const [sections, setSections] = useState<BoardSection[]>([]);
  console.log(sections);

  useEffect(() => {
    boardsApi.getSections(id).then((sections) => {
      setSections(sections);
    });
  }, []);

  const wrapperOnAddSection = (name: string) => {
    onAddSection({
      id: guid(),
      boardId: id,
      name: name,
      tasks: [],
    });
  };

  const onAddSection = (section: BoardSection) => {
    setSections([...sections, section]);
    boardsApi.postSections(section);
  };

  const onRemoveSection = (id: Guid) => {
    console.log(id);
    const newSections = [...sections];
    console.log(newSections.filter((s) => s.id !== id));
    setSections(newSections.filter((s) => s.id !== id));
    boardsApi.removeSection(id);
  };

  return (
    <div className={styles.root}>
      <Lamp />
      <div className={styles.container}>
        {sections.map((section) => (
          <Section key={section.id} section={section} onAddSection={onAddSection} boardId={id} onRemoveSection={onRemoveSection} />
        ))}
        <SectionCreator onAddSectionName={wrapperOnAddSection} />
      </div>
    </div>
  );
};
