import type { LotteryResult } from '~/types';

import { Icons } from '~/components/icons';
import { Lottery } from '~/components/lottery';

export default async function HomePage() {
  const lotteryCosmicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC',
    {
      cache: 'no-store',
    }
  );
  const lotteryClassicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=CLASSIC',
    {
      cache: 'no-store',
    }
  );
  const lotteryAtomicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=ATOMIC',
    {
      cache: 'no-store',
    }
  );
  const [lotteryCosmicResponse, lotteryClassicResponse, lotteryAtomicResponse] = await Promise.all([
    lotteryCosmicPromise,
    lotteryClassicPromise,
    lotteryAtomicPromise,
  ]);
  const [lotteryCosmic, lotteryClassic, lotteryAtomic] = (await Promise.all([
    lotteryCosmicResponse.json(),
    lotteryClassicResponse.json(),
    lotteryAtomicResponse.json(),
  ])) as [LotteryResult, LotteryResult, LotteryResult];

  return (
    <div className='p-3.5'>
      <header className='flex items-center'>
        <Icons.menu className='size-6' />
        <h1 className='flex-1 text-center text-[22px] font-bold'>Lottery</h1>
      </header>
      <main>
        <h2 className='py-4 text-[21px] font-bold'>Latest Result</h2>
        <div className='space-y-4'>
          <Lottery lottery={lotteryCosmic.data} type='cosmic' />
          <Lottery lottery={lotteryClassic.data} type='classic' />
          <Lottery lottery={lotteryAtomic.data} type='atomic' />
        </div>
      </main>
    </div>
  );
}
