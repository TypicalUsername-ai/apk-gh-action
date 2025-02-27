import { BoardCfg } from './boards.model';

// TODO translate strings
export const DEFAULT_BOARDS: BoardCfg[] = [
  {
    id: 'EISENHOWER_MATRIX',
    title: 'Eisenhauer Matrix',
    cols: 2,
    rows: 2,
    panels: [
      {
        id: 'URGENT_AND_IMPORTANT',
        title: 'Urgent & Important',
        tagIds: [],
      },
      {
        id: 'NOT_URGENT_AND_IMPORTANT',
        title: 'Not Urgent & Important',
        tagIds: [],
      },
      {
        id: 'URGENT_AND_NOT_IMPORTANT',
        title: 'Urgent & Not Important',
        tagIds: [],
      },
      {
        id: 'NOT_URGENT_AND_NOT_IMPORTANT',
        title: 'Not Urgent & Not Important',
        tagIds: [],
      },
    ],
  },
  {
    id: 'KANBAN_DEFAULT',
    title: 'Kanban',
    cols: 3,
    rows: 1,
    panels: [
      {
        id: 'TODO',
        title: 'To Do',
        // TODO add all task state stuff
        tagIds: [],
      },
      {
        id: 'DOING',
        title: 'Doing',
        tagIds: [],
      },
      {
        id: 'DONE',
        title: 'Done',
        tagIds: [],
      },
    ],
  },
];
