import React from 'react';
import configureMockStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import { DecodingData, DecodingDataChangeType } from '@lorikapp/signature-controller';
import { waitFor } from '@testing-library/dom';

import { getMockTypedSignConfirmStateForRequest } from '../../../../../../../../test/data/confirmations/helper';
import { renderWithConfirmContextProvider } from '../../../../../../../../test/lib/confirmations/render-helpers';
import {
  permitSignatureMsg,
  seaportSignatureMsg,
} from '../../../../../../../../test/data/confirmations/typed_sign';
import { memoizedGetTokenStandardAndDetails } from '../../../../../utils/token';
import TypedSignV4Simulation from './typed-sign-v4-simulation';

jest.mock('../../../../../../../store/actions', () => ({
  getTokenStandardAndDetails: jest.fn().mockResolvedValue({ decimals: 2, standard: 'ERC20' }),
  updateEventFragment: jest.fn(),
}));

const decodingData: DecodingData = {
  stateChanges: [{
    assetType: 'ERC20',
    changeType: DecodingDataChangeType.Approve,
    address: '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad',
    amount: '1461501637330902918203684832716283019655932542975',
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  }],
};

describe('PermitSimulation', () => {
  afterEach(() => {
    jest.clearAllMocks();
    memoizedGetTokenStandardAndDetails?.cache?.clear?.();
  });

  it('should render default simulation if decoding api does not return result', async () => {
    const state = getMockTypedSignConfirmStateForRequest({
      ...permitSignatureMsg,
      decodingLoading: false,
      decodingData: undefined,
    }, { lorikapp: { useTransactionSimulations: true } });
    const mockStore = configureMockStore([])(state);

    await act(async () => {
      const { findByText } = renderWithConfirmContextProvider(<TypedSignV4Simulation />, mockStore);
      expect(await findByText('30')).toBeInTheDocument();
      expect(await findByText('Estimated changes')).toBeInTheDocument();
      expect(await findByText("You're giving the spender permission to spend this many tokens from your account.")).toBeInTheDocument();
    });
  });

  it('should render default simulation if decoding api returns error', async () => {
    const state = getMockTypedSignConfirmStateForRequest({
      ...permitSignatureMsg,
      decodingLoading: false,
      decodingData: { stateChanges: null, error: { message: 'some error', type: 'SOME_ERROR' } },
    }, { lorikapp: { useTransactionSimulations:true}});
const mockStore = configureMockStore([])(state);

await act(async () => {

const{findByText} =renderWithConfirmContextProvider(<TypedSignV

```
