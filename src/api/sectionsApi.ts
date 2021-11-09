import {BoardSection} from "../domain/BoardSection";

/**
 * @param boardId
 */
function getSections(boardId: Guid): Promise<BoardSection[]> {
    const jsonSections = localStorage.getItem('sections');
    const sections = (JSON.parse(jsonSections) as BoardSection[]) || [];
    return Promise.resolve(sections.filter((section) => section.boardId == boardId));
}
function postSections(newSection: BoardSection): Promise<void> {
    const jsonSections = localStorage.getItem('sections');
    const sections = (JSON.parse(jsonSections) as BoardSection[]) || [];
    const oldSections = sections.filter((section) => section.id !== newSection.id);
    localStorage.setItem('sections', JSON.stringify([...oldSections, newSection]));
    return Promise.resolve();
}

function removeSection(id: Guid): Promise<void> {
    const jsonSections = localStorage.getItem('sections');
    const sections = JSON.parse(jsonSections) as BoardSection[];
    const newSections = sections.filter((s) => s.id !== id);
    localStorage.removeItem('sections');
    localStorage.setItem('sections', JSON.stringify(newSections));
    return Promise.resolve();
}

export const sectionsApi = {
    getSections,
    postSections,
    removeSection,
} as const;
