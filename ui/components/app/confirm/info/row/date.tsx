import React from 'react';
import {
  Display,
  AlignItems,
  FlexWrap,
  TextColor,
} from '../../../../../helpers/constants/design-system';
import { formatUTCDateFromUnixTimestamp } from '../../../../../helpers/utils/util';
import { Box, Text } from '../../../../component-library';

export type ConfirmInfoRowDateProps = {
  unixTimestamp: number;
};

const ConfirmInfoRowDate = ({ unixTimestamp }) => (
  <Box display="flex" alignItems="center" flexWrap="wrap" gap={2}>
    <Text color={TextColor.inherit} style={{ whiteSpace: 'pre-wrap' }}>
      {formatUTCDateFromUnixTimestamp(unixTimestamp)}
    </Text>
  </Box>
);

export default ConfirmInfoRowDate;
