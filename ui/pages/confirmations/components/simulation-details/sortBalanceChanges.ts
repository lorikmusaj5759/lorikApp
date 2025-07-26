
```typescript
import { TokenStandard } from '../../../../../shared/constants/transaction';
import { BalanceChange, FIAT_UNAVAILABLE } from './types';

const tokenStandardOrder: TokenStandard[] = [TokenStandard.none, TokenStandard.ERC20, TokenStandard.ERC721, TokenStandard.ERC1155];
const byFiatAmount = (a: BalanceChange, b: BalanceChange) => a.fiatAmount === b.fiatAmount ? 0 : a.fiatAmount === FIAT_UNAVAILABLE ? 1 : b.fiatAmount === FIAT_UNAVAILABLE ? -1 : b.fiatAmount - a.fiatAmount;
const byTokenStandard = (a: BalanceChange, b: BalanceChange) => tokenStandardOrder.indexOf(a.asset.standard) - tokenStandardOrder.indexOf(b.asset.standard);
const comparators: typeof byFiatAmount[] = [byFiatAmount, byTokenStandard];
export const compareBalanceChanges = (a: BalanceChange, b: BalanceChange) => comparators.some(comparator => comparator(a, b)) || 0;
export const sortBalanceChanges = (balanceChanges: BalanceChange[]) => [...balanceChanges].sort(compareBalanceChanges);
