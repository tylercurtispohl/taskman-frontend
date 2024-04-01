export type BoardT = {
  id: number;
  cardLists?: CardListT[];
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CardListT = {
  id: number;
  name: string;
  cards: CardT[];
  boardId: number;
  createdAt: string;
  updatedAt: string;
};

export type CardT = {
  id: number;
  name: string;
  description: string;
  cardListId: number;
  createdAt: string;
  updatedAt: string;
};
