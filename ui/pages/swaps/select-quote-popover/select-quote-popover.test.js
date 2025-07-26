 ```javascript
import React from 'react';
import { renderWithProvider } from '../../../../test/jest';
import configureStore from '../../../store/store';
import mockState from '../../../../test/data/mock-state.json';
import SelectQuotePopover from '.';

const createProps = (customProps) => ({
  onClose: jest.fn(),
  onSubmit: jest.fn(),
  swapToSymbol: 'ETH',
  initialAggId: 'initialAggId',
  onQuoteDetailsIsOpened: jest.fn(),
  hideEstimatedGasFee: false,
  ...customProps,
