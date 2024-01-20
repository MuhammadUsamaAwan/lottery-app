// @vitest-environment jsdom

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Lottery } from './lottery';

const lotteryData = {
  lotteryName: 'COSMIC',
  lotteryPrice: 2,
  roundNumber: 2325584,
  previousWinningticket: [1, 2, 3, 4, 5, 6],
  poolAmount: [
    {
      poolId: '5e74dbcd-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9cc4f7-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'INAE',
      coinName: 'iNAE',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:16:33.831419Z',
    },
    {
      poolId: '7ced9a20-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9d5c36-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'TRX',
      coinName: 'TRON',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:17:24.954372Z',
    },
    {
      poolId: '64224a18-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9ce6d4-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'BTC',
      coinName: 'Bitcoin',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00004550',
      createdAt: '2024-01-20T11:16:43.356624Z',
    },
    {
      poolId: '69362af4-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9d0471-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'ETH',
      coinName: 'Ethereum',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:16:51.875507Z',
    },
    {
      poolId: '6e6ea8a6-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9d191c-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'SOL',
      coinName: 'Solana',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:17:00.634334Z',
    },
    {
      poolId: '7344511d-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9d320a-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'XRP',
      coinName: 'XRP',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:17:08.74545Z',
    },
    {
      poolId: '77f27b50-b785-11ee-9abc-0242ac110005',
      lotteryId: 'e0b53904-1cbb-11ee-9f5e-0242ac110002',
      coinId: 'bc9d4689-1b20-11ee-959b-0242ac110004',
      coinSymbol: 'DOGE',
      coinName: 'DOGE',
      roundId: '5e545463-b785-11ee-9abc-0242ac110005',
      poolAmount: '0.00000000',
      createdAt: '2024-01-20T11:17:16.597743Z',
    },
  ],
  winningPot: 1.8913013413257584,
  currentPool: 1.8913013413257584,
  nextDraw: 382,
  ticketCount: 0,
  prevTicketCount: 0,
  showPoolDetail: true,
};

describe('lottery', () => {
  it('renders the data correctly', () => {
    render(<Lottery lottery={lotteryData} type='cosmic' />);

    expect(screen.getByText(lotteryData.lotteryName)).toBeInTheDocument();
    expect(screen.getByText(lotteryData.winningPot)).toBeInTheDocument();
  });
  it('renders current pool status when button is clicked', () => {
    render(<Lottery lottery={lotteryData} type='cosmic' />);
    const button = screen.getByTestId('pool-status');
    fireEvent.click(button);
    expect(screen.getByText('Current Pool Status')).toBeInTheDocument();
  });
});
