import type { LotteryResult } from '~/types';

type Props = {
  lottery: LotteryResult['data'];
};

export function Atomic({ lottery }: Props) {
  return <div>Atomic</div>;
}
