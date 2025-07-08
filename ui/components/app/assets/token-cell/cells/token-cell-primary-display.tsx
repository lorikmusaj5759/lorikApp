import React from 'react';
import {
  TextAlign,
  TextColor,
  TextVariant,
} from '../../../../../helpers/constants/design-system';
import {
  SensitiveText,
  SensitiveTextLength,
} from '../../../../component-library';
import { TokenFiatDisplayInfo } from '../../types';

type TokenCellPrimaryDisplayProps = {
  token: TokenFiatDisplayInfo;
  privacyMode: boolean;
};

export const TokenCellPrimaryDisplay = React.memo(
  ({ token, privacyMode }: TokenCellPrimaryDisplayProps) => (
    <SensitiveText
      data-testid="multichain-token-list-item-value"
      color={TextColor.textAlternative}
      variant={TextVariant.bodySmMedium}
      textAlign={TextAlign.End}
      isHidden={privacyMode}
      length={SensitiveTextLength.Short}
    >
      {token.primary} {token.symbol}
    </SensitiveText>
  ),
  (prev, next) =>
    prev.token.primary === next.token.primary && prev.privacyMode === next.privacyMode,
);
