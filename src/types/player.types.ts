export type Player = {
  healthPoints: number,
  maxHealthPoints: number,
  gold: number,
  potions: Potion[],
  cards: {
    deck: Cards,
    hand: Cards,
    drawPile: Cards,
    discardPile: Cards,
    exhausted: Cards,
  },
};

export type Potion = {
  icon: string,
  title: string,
  description: string,
  effect: () => void,
};

export type CardType = 'Attack' | 'Skill' | 'Power';
export type Card = {
  id: string,
  type: CardType,
  title: string,
  description: string,
  cost: number,
  isUpgraded: boolean,
  isBurnable: boolean,
};
export type Cards = Card[];
