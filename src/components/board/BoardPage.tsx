import React, {useEffect, useState} from 'react';
import styles from './BoardPage.scss';
import {useParams} from 'react-router-dom';
import {BoardSection} from '../../domain/BoardSection';
import {Section} from './Section/Section';
import Lamp from '../shared/lamp/Lamp';
import {SectionCreator} from './SectionCreator/SectionCreator';
import {guid} from '../../utils/guidUtils';
import {sectionsApi} from "../../api/sectionsApi";

export const BoardPage = () => {
  const {id} = useParams<{readonly id: string}>();

  const [sections, setSections] = useState<BoardSection[]>([]);

  useEffect(() => {
    sectionsApi.getSections(id).then((sections) => {
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
    const newSections = sections.filter(s => s.id !== section.id);
    console.log("newSection ", section);
    setSections([...newSections, section]);
    sectionsApi.postSections(section);
  };

  const onRemoveSection = (id: Guid) => {
    const newSections = [...sections];
    setSections(newSections.filter((s) => s.id !== id));
    sectionsApi.removeSection(id);
  };

  return (
    <div className={styles.root}>
      <Lamp />
      <div className={styles.container}>
        {sections.map((section) => (
          <Section key={section.id} section={section} onAddSection={onAddSection} onRemoveSection={onRemoveSection} />
        ))}
        <SectionCreator onAddSectionName={wrapperOnAddSection} />
      </div>
    </div>
  );
};
