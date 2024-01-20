import type { LotteryResult } from '~/types';

type Props = {
  lottery: LotteryResult['data'];
};

export function Classic({ lottery }: Props) {
  return <div>Classic</div>;
}
