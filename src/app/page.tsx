import type { LotteryResult } from '~/types';

import { Atomic } from '~/components/atomic';
import { Classic } from '~/components/classic';
import { Cosmic } from '~/components/cosmic';
import { Icons } from '~/components/icons';

export default async function HomePage() {
  const lotteryCosmicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC',
    {
      cache: 'no-store',
    }
  );
  const lotteryClassicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC',
    {
      cache: 'no-store',
    }
  );
  const lotteryAtomicPromise = fetch(
    'https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=COSMIC',
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
        <Cosmic lottery={lotteryCosmic.data} />
        <Classic lottery={lotteryClassic.data} />
        <Atomic lottery={lotteryAtomic.data} />
      </main>
    </div>
  );
}
