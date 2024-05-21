const tarotCards = [
  {
    name: "The Fool",
    number: 0,
    arcana: "Major",
  },
  {
    name: "The Magician",
    number: 1,
    arcana: "Major",
  },
  {
    name: "The High Priestess",
    number: 2,
    arcana: "Major",
  },
  {
    name: "The Empress",
    number: 3,
    arcana: "Major",
  },
  {
    name: "The Emperor",
    number: 4,
    arcana: "Major",
  },
  {
    name: "The Hierophant",
    number: 5,
    arcana: "Major",
  },
  {
    name: "The Lovers",
    number: 6,
    arcana: "Major",
  },
  {
    name: "The Chariot",
    number: 7,
    arcana: "Major",
  },
  {
    name: "Strength",
    number: 8,
    arcana: "Major",
  },
  {
    name: "The Hermit",
    number: 9,
    arcana: "Major",
  },
  {
    name: "Wheel of Fortune",
    number: 10,
    arcana: "Major",
  },
  {
    name: "Justice",
    number: 11,
    arcana: "Major",
  },
  {
    name: "The Hanged Man",
    number: 12,
    arcana: "Major",
  },
  {
    name: "Death",
    number: 13,
    arcana: "Major",
  },
  {
    name: "Temperance",
    number: 14,
    arcana: "Major",
  },
  {
    name: "The Devil",
    number: 15,
    arcana: "Major",
  },
  {
    name: "The Tower",
    number: 16,
    arcana: "Major",
  },
  {
    name: "The Star",
    number: 17,
    arcana: "Major",
  },
  {
    name: "The Moon",
    number: 18,
    arcana: "Major",
  },
  {
    name: "The Sun",
    number: 19,
    arcana: "Major",
  },
  {
    name: "Judgment",
    number: 20,
    arcana: "Major",
  },
  {
    name: "The World",
    number: 21,
    arcana: "Major",
  },

  {
    name: "Ace of Wands",
    number: 1,
    arcana: "Wands",
  },
  {
    name: "Two of Wands",
    number: 2,
    arcana: "Wands",
  },
  {
    name: "Three of Wands",
    number: 3,
    arcana: "Wands",
  },
  {
    name: "Four of Wands",
    number: 4,
    arcana: "Wands",
  },
  {
    name: "Five of Wands",
    number: 5,
    arcana: "Wands",
  },
  {
    name: "Six of Wands",
    number: 6,
    arcana: "Wands",
  },
  {
    name: "Seven of Wands",
    number: 7,
    arcana: "Wands",
  },
  {
    name: "Eight of Wands",
    number: 8,
    arcana: "Wands",
  },
  {
    name: "Nine of Wands",
    number: 9,
    arcana: "Wands",
  },
  {
    name: "Ten of Wands",
    number: 10,
    arcana: "Wands",
  },
  {
    name: "Page of Wands",
    number: 11,
    arcana: "Wands",
  },
  {
    name: "Knight of Wands",
    number: 12,
    arcana: "Wands",
  },
  {
    name: "Queen of Wands",
    number: 13,
    arcana: "Wands",
  },
  {
    name: "King of Wands",
    number: 14,
    arcana: "Wands",
  },
  {
    name: "Ace of Cups",
    number: 1,
    arcana: "Cups",
  },
  {
    name: "Two of Cups",
    number: 2,
    arcana: "Cups",
  },
  {
    name: "Three of Cups",
    number: 3,
    arcana: "Cups",
  },
  {
    name: "Four of Cups",
    number: 4,
    arcana: "Cups",
  },
  {
    name: "Five of Cups",
    number: 5,
    arcana: "Cups",
  },
  {
    name: "Six of Cups",
    number: 6,
    arcana: "Cups",
  },
  {
    name: "Seven of Cups",
    number: 7,
    arcana: "Cups",
  },
  {
    name: "Eight of Cups",
    number: 8,
    arcana: "Cups",
  },
  {
    name: "Nine of Cups",
    number: 9,
    arcana: "Cups",
  },
  {
    name: "Ten of Cups",
    number: 10,
    arcana: "Cups",
  },
  {
    name: "Page of Cups",
    number: 11,
    arcana: "Cups",
  },
  {
    name: "Knight of Cups",
    number: 12,
    arcana: "Cups",
  },
  {
    name: "Queen of Cups",
    number: 13,
    arcana: "Cups",
  },
  {
    name: "King of Cups",
    number: 14,
    arcana: "Cups",
  },
  {
    name: "Ace of Swords",
    number: 1,
    arcana: "Swords",
  },
  {
    name: "Two of Swords",
    number: 2,
    arcana: "Swords",
  },
  {
    name: "Three of Swords",
    number: 3,
    arcana: "Swords",
  },
  {
    name: "Four of Swords",
    number: 4,
    arcana: "Swords",
  },
  {
    name: "Five of Swords",
    number: 5,
    arcana: "Swords",
  },
  {
    name: "Six of Swords",
    number: 6,
    arcana: "Swords",
  },
  {
    name: "Seven of Swords",
    number: 7,
    arcana: "Swords",
  },
  {
    name: "Eight of Swords",
    number: 8,
    arcana: "Swords",
  },
  {
    name: "Nine of Swords",
    number: 9,
    arcana: "Swords",
  },
  {
    name: "Ten of Swords",
    number: 10,
    arcana: "Swords",
  },
  {
    name: "Page of Swords",
    number: 11,
    arcana: "Swords",
  },
  {
    name: "Knight of Swords",
    number: 12,
    arcana: "Swords",
  },
  {
    name: "Queen of Swords",
    number: 13,
    arcana: "Swords",
  },
  {
    name: "King of Swords",
    number: 14,
    arcana: "Swords",
  },
  {
    name: "Ace of Pentacles",
    number: 1,
    arcana: "Pentacles",
  },
  {
    name: "Two of Pentacles",
    number: 2,
    arcana: "Pentacles",
  },
  {
    name: "Three of Pentacles",
    number: 3,
    arcana: "Pentacles",
  },
  {
    name: "Four of Pentacles",
    number: 4,
    arcana: "Pentacles",
  },
  {
    name: "Five of Pentacles",
    number: 5,
    arcana: "Pentacles",
  },
  {
    name: "Six of Pentacles",
    number: 6,
    arcana: "Pentacles",
  },
  {
    name: "Seven of Pentacles",
    number: 7,
    arcana: "Pentacles",
  },
  {
    name: "Eight of Pentacles",
    number: 8,
    arcana: "Pentacles",
  },
  {
    name: "Nine of Pentacles",
    number: 9,
    arcana: "Pentacles",
  },
  {
    name: "Ten of Pentacles",
    number: 10,
    arcana: "Pentacles",
  },
  {
    name: "Page of Pentacles",
    number: 11,
    arcana: "Pentacles",
  },
  {
    name: "Knight of Pentacles",
    number: 12,
    arcana: "Pentacles",
  },
  {
    name: "Queen of Pentacles",
    number: 13,
    arcana: "Pentacles",
  },
  {
    name: "King of Pentacles",
    number: 14,
    arcana: "Pentacles",
  },
].map((card) => ({
  ...card,
  image: `src/img/${card.number}-${card.arcana.toLowerCase()}.jpg`,
}))

export default tarotCards
