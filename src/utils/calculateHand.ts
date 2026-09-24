import type { PlayingCard, PokerHand } from "../types/game";

//Tar imot fem kort og returnerer navnet på pokerhånden
export default function calculateHand(hand: PlayingCard[]): PokerHand {
  const rankCounts: Partial<Record<PlayingCard["rank"], number>> = {};
  for (const card of hand) {
    rankCounts[card.rank] = (rankCounts[card.rank] ?? 0) + 1;
  }
  //Lager et array med antallene uavhengig av rekkefølge
  const counts = Object.values(rankCounts);
  const isFlush =
    hand.length === 5 && hand.every((card) => card.suit === hand[0].suit);
  const rankValues = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const values = hand.map((card) => {
    if (
      card.rank === "J" ||
      card.rank === "Q" ||
      card.rank === "K" ||
      card.rank === "A"
    ) {
      return rankValues[card.rank];
    }
    return Number(card.rank);
  });
  values.sort((a, b) => a - b);
  //Sjekker at hvert tall etter det første er en større enn det forrige
  const isRegularStraight =
    values.length === 5 &&
    values.every(
      (value, index) => index === 0 || value === values[index - 1] + 1,
    );
  //Sjekker rekkefølgen A-2-3-4-5 der A telles som 1
  const isAceLowStraight = values.join(",") === "2,3,4,5,14";
  //Godtar begge måtene å få straight på
  const isStraight = isRegularStraight || isAceLowStraight;
  //Pokerhånd sjekker
  if (isStraight && isFlush && values[0] === 10) {
    return "Royal Flush";
  }
  if (isStraight && isFlush) {
    return "Straight Flush";
  }
  if (counts.includes(4)) {
    return "Four of a Kind";
  }
  if (counts.includes(3) && counts.includes(2)) {
    return "Full House";
  }
  if (isFlush) {
    return "Flush";
  }
  if (isStraight) {
    return "Straight";
  }
  if (counts.includes(3)) {
    return "Three of a Kind";
  }
  const pairCount = counts.filter((count) => count === 2).length;
  if (pairCount === 2) {
    return "Two Pair";
  }
  if (counts.includes(2)) {
    return "One Pair";
  }

  return "High Card";
}
