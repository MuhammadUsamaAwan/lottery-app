import type { LotteryResult } from '~/types';

import { Icons } from '~/components/icons';

type Props = {
  lottery: LotteryResult['data'];
};

export function Cosmic({ lottery }: Props) {
  return (
    <div className='rounded-lg bg-[#EEE1F0] p-4'>
      <div className='flex items-baseline justify-between'>
        <div className='flex items-baseline gap-6'>
          <div>{lottery.lotteryName}</div>
          <div className='text-sm font-medium'>No. </div>
        </div>
        <Icons.magnifyPlus className='size-4 text-[#961A88]' />
      </div>

      <div>
        <div className='grid size-9 place-content-center rounded-full bg-[#595857]'>
          <div className='text-[22px] text-white'></div>
        </div>
      </div>

      <div className='flex items-baseline'>
        <div className='text-[13px] font-medium'>Winning Pot</div>
        <div className='text-2xl font-bold'>980,000,000,00</div>
        <div className='text-xs font-medium uppercase'>Lucki</div>
      </div>

      <div className='bg-[#961A88] text-white'>
        <div className='text-sm font-[600]'>Next Draw</div>
        <div>
          <Icons.clock className='size-[18px]' />
          <div className='text-[20px] font-[600]'>142:32:01</div>
        </div>
        <button className='rounded bg-white px-6 py-3 text-sm font-[600] text-[#961A88]'>Play</button>
      </div>
      <div>
        <Icons.poylgon className='size-3 rotate-180 text-[#3F3F3F]' />
        <div className='text-[13px] font-[600] text-[#3F3F3F]'>Current Pool Status</div>
      </div>
    </div>
  );
}
