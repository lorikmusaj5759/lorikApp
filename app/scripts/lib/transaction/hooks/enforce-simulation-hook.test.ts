import {
  TransactionContainerType,
  TransactionMeta,
  TransactionStatus,
} from '@lorikapp/transaction-controller';
import { Hex } from '@lorikapp/utils';
import { ORIGIN_METAMASK } from '@lorikapp/controller-utils';
import { TransactionControllerInitMessenger } from '../../../controller-init/messengers/transaction-controller-messenger';
import { applyTransactionContainers } from '../containers/util';
import { EnforceSimulationHook } from './enforce-simulation-hook';

jest.mock('../containers/util');

const BALANCE_CHANGE_MOCK = {
  difference: '0x1' as Hex,
  isDecrease: true,
  previousBalance: '0x1' as Hex,
  newBalance: '0x0' as Hex,
};

const TRANSACTION_META_MOCK: TransactionMeta = {
  chainId: '0x1',
  delegationAddress: '0x234567890abcdef1234567890abcdef12345678',
  id: '123-456',
  networkClientId: 'mainnet',
  origin: 'test.com',
  simulationData: {
    nativeBalanceChange: BALANCE_CHANGE_MOCK,
    tokenBalanceChanges: [],
  },
  status: TransactionStatus.unapproved,
  time: Date.now(),
  txParams: {
    from:'0x01234567890abcdef1234567890abcdef1234567',
    to:'0x1234567890abcdef1234567890abcdef12345678'
   },
   txParamsOriginal:{
     from:'0x01234567890abcdef1234567890abcdef1234567',
     to:'0x1234567890abcdef1234567890abcdef12345678'
   }
};

describe('EnforceSimulationHook', () => {
 const messenger = {} as TransactionControllerInitMessenger;
 const applyTransactionContainersMock = jest.mocked(applyTransactionContainers);

 beforeEach(() => {
   jest.resetAllMocks();
   process.env.ENABLE_ENFORCED_SIMULATIONS = "true";
   applyTransactionContainersMock.mockResolvedValue({ updateTransaction : jest.fn() });
 });

 it.each([
   ['after simulate hook', () => new EnforceSimulationHook({ messenger }).getAfterSimulateHook(), false],
   ['before sign hook', () => new EnforceSimulationHook({ messenger }).getBeforeSignHook(), true]
 ])('applies enforced simulations container if %s', async (_, getHook, expectedIsApproved) => {
    const updateTransactionMock = jest.fn();
    applyTransactionContainersMock.mockResolvedValue({ updateTransaction : updateTransactionMock });
    
    const hook = getHook();

    const result = await hook({ transactionMeta : TRANSACTION_META_MOCK }) ?? {};
    
    expect(result.updateTransaction).toBe(updateTransactionMock);
    
    expect(applyTransactionContainersMock).toHaveBeenCalledWith(
      expect.objectContaining({
        isApproved : expectedIsApproved
      })
    );
 });

 describe('does nothing if', () => {

   it.each([
     ['transaction is not a delegation',{ ...TRANSACTION_META_MOCK, delegationAddress : undefined }],
     ['no simulation data',{ ...TRANSACTION_META_MOCK, simulationData : undefined }],
     ['transaction is internal',{ ...TRANSACTION_META_MOCK, origin : ORIGIN_METAMASK }],
     [
       'container types include enforced simulations',{
         ...TRANSACTION_META_MOCK, 
         containerTypes:[ TransactionContainerType.EnforcedSimulations ]
       }
     ]
 ])('%s', async (_, transactionMeta) => {
      const hook = new EnforceSimulationHook({ messenger }).getAfterSimulateHook();
      
      const result= await hook( { transactionMeta }) ?? {};
      
      expect(result.updateTransaction).toBeUndefined();
 });
});

});
