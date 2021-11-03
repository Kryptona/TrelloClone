import React, {useEffect, useState} from 'react';
import styles from './BoardPage.scss';
import {useParams} from 'react-router-dom';
import {BoardSection} from '../../domain/BoardSection';
import {Section} from './Section/Section';
import Lamp from '../shared/lamp/Lamp';
import {SectionCreator} from './SectionCreator/SectionCreator';
import {guid} from "../../utils/guidUtils";
import {boardsApi} from "../../api/boardsApi";

export const BoardPage = () => {
  const {id} = useParams<{readonly id: string}>();
  console.log(id);

  const [sections, setSections] = useState<BoardSection[]>([]);

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

  return (
    <div className={styles.root}>
      <Lamp />

      <div className={styles.container}>
        {sections.map((section) => (
          <Section section={section} onAddSection={onAddSection} boardId={id} />
        ))}
        <SectionCreator onAddSectionName={wrapperOnAddSection} />
      </div>
    </div>
  );
};
