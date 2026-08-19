import { Lesson } from '../../types';
import { LESSONS_THEME1 } from './theme1';
import { LESSONS_THEME2 } from './theme2';
import { LESSONS_THEME3 } from './theme3';
import { LESSONS_THEME4 } from './theme4';
import { LESSONS_THEME4_EXTRA } from './theme4_extra';
import { LESSONS_THEME5 } from './theme5';

export const ALL_LESSONS: Lesson[] = [
  ...LESSONS_THEME1,
  ...LESSONS_THEME2,
  ...LESSONS_THEME3,
  ...LESSONS_THEME4,
  ...LESSONS_THEME4_EXTRA,
  ...LESSONS_THEME5
];

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find(l => l.id === id);
}

export function getLessonsByThemeId(themeId: string): Lesson[] {
  return ALL_LESSONS.filter(l => l.themeId === themeId);
}
