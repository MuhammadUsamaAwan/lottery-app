'use client';

import { useState } from 'react';
import type { LotteryResult } from '~/types';

import { cn } from '~/lib/utils';
import { Icons } from '~/components/icons';

type Props = {
  lottery: LotteryResult['data'];
  type: 'cosmic' | 'classic' | 'atomic';
};

export function Lottery({ lottery, type }: Props) {
  const [showPoolStatus, setShowPoolStatus] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      className={cn(
        'space-y-2 rounded-lg py-4',
        type === 'cosmic' ? 'bg-[#EEE1F0]' : type === 'classic' ? 'bg-[#E9EEF6]' : 'bg-[#EAF9F7]'
      )}
    >
      <div className='flex items-baseline justify-between px-4'>
        <div className='flex items-baseline gap-6'>
          <div>{lottery.lotteryName}</div>
          <div className='text-sm font-medium'>No. {lottery.roundNumber}</div>
        </div>
        {isZoomed ? (
          <button onClick={() => setIsZoomed(false)}>
            <Icons.magnifyMinus className='size-4 text-[#961A88]' />
          </button>
        ) : (
          <button onClick={() => setIsZoomed(true)}>
            <Icons.magnifyPlus className='size-4 text-[#961A88]' />
          </button>
        )}
      </div>

      <div className='flex gap-2 px-4'>
        {lottery.previousWinningticket.map((t, i) => (
          <div key={i} className='grid size-9 place-content-center rounded-full bg-[#595857]'>
            <div className='text-[22px] text-white'>{t}</div>
          </div>
        ))}
      </div>

      <div className='flex items-baseline justify-between px-4'>
        <div className='text-[13px] font-medium'>Winning Pot</div>
        <div className='flex items-baseline gap-1'>
          <div className='text-2xl font-bold'>{lottery.winningPot}</div>
          <div className='text-xs font-medium uppercase'>Lucki</div>
        </div>
      </div>

      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 text-white',
          type === 'cosmic' ? 'bg-[#961A88]' : type == 'classic' ? 'bg-[#191978]' : 'bg-[#00AEB1]'
        )}
      >
        <div className='flex gap-4'>
          <div className='text-sm font-[600]'>
            Next
            <br />
            Draw
          </div>
          <div className='flex items-center gap-2'>
            <Icons.clock className='size-[18px]' />
            <div className='text-[20px] font-[600]'>{lottery.nextDraw}</div>
          </div>
        </div>
        <button
          className={cn(
            'rounded bg-white px-6 py-1.5 text-sm font-[600]',
            type === 'cosmic' ? 'text-[#961A88]' : type == 'classic' ? 'text-[#191978]' : 'text-[#00AEB1]'
          )}
        >
          Play
        </button>
      </div>

      {showPoolStatus && (
        <div className='px-4'>
          <div>Current Pool Status</div>
          {lottery.poolAmount?.map((p, i) => (
            <div key={i} className='flex items-center justify-between'>
              <div>{p.coinName}</div>
              <div>
                {p.poolAmount} {p.coinSymbol}
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowPoolStatus(prev => !prev)}
        className='flex w-full items-center justify-center gap-1'
        data-testid='pool-status'
      >
        <Icons.poylgon className={cn('size-3 text-[#3F3F3F] duration-200', !showPoolStatus && 'rotate-180')} />
        <div className='text-[13px] font-[600] text-[#3F3F3F]'>{showPoolStatus ? 'Close' : 'Current Pool Status'}</div>
      </button>
    </div>
  );
}
