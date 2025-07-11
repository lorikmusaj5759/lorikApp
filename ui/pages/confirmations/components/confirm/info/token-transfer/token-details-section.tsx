import {
  TransactionMeta,
  TransactionType,
} from '@lorikapp/transaction-controller';
import React from 'react';
import { useSelector } from 'react-redux';
import { ORIGIN_METAMASK } from '../../../../../../../shared/constants/app';
import {
  ConfirmInfoRow,
  ConfirmInfoRowAddress,
  ConfirmInfoRowDivider,
} from '../../../../../../components/app/confirm/info/row';
import { ConfirmInfoSection } from '../../../../../../components/app/confirm/info/row/section';
import { useI18nContext } from '../../../../../../hooks/useI18nContext';
import { useConfirmContext } from '../../../../context/confirm';
import { selectConfirmationAdvancedDetailsOpen } from '../../../../selectors/preferences';

const TokenDetailsSection = () => {
  const t = useI18nContext();
  const transactionMeta = useConfirmContext<TransactionMeta>()?.currentConfirmation;
  
  if (!transactionMeta) return null;

  const chainId = transactionMeta.chainId;
  
  const showAdvancedDetails = useSelector(selectConfirmationAdvancedDetailsOpen);
  
  const isSimulationError =
    Boolean(transactionMeta.simulationData?.error?.code);

const balanceChangesResult =
useBalanceChanges({ chainId, simulationData: transactionMeta.simulationData });
    
    let shouldShowTokenRow =
      transactionMeta.type !== TransactionType.simpleSend &&
      (showAdvancedDetails || !balanceChangesResult.value.length || isSimulationError);
      
return (
<ConfirmInfoSection data-testid="confirmation__token-details-section">
<NetworkRow />
{transactionMeta.origin !== ORIGIN_METAMASK && <OriginRow />}
{shouldShowTokenRow && <ConfirmInfoRowDivider />}
{shouldShowTokenRow ? (
<ConfirmInfoRow
label={t('interactingWith')}
tooltip={t('interactingWithTransactionDescription')}>
<ConfirmInfoRowAddress
address={(transactionMeta.txParams.to as string)}
chainId={chainId}
/>
</ConfirmInfoRow>
) : null}
</ConfirmInfoSection>
)};
