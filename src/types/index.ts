export type LotteryResult = {
  result: boolean;
  code: number;
  message: string;
  data: {
    lotteryName: string;
    lotteryPrice: number;
    roundNumber: number;
    previousWinningTicket: number[];
    poolAmount: poolAmount[];
    winningPot: number;
    currentPool: number;
    nextDraw: number;
    ticketCount: number;
    prevTicketCount: number;
    showPoolDetail: boolean;
  };
};

type poolAmount = {
  poolId: string;
  lotteryId: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  roundId: string;
  poolAmount: string;
  createdAt: string;
};
