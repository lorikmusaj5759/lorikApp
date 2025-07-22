import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import {
  Display,
  AlignItems,
  BorderRadius,
  BackgroundColor,
} from '../../../helpers/constants/design-system';

import { Box, BoxProps } from '../box';
import { Input } from '../input';

export const TextField: React.FC<{
  autoComplete?: string;
  autoFocus?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean | null;
  id?: string | null;
}> = React.forwardRef(
    (
      {
        autoComplete = '',
        autoFocus = false,
        className = '',
        defaultValue = '',
        disabled = false,
        error = false as null | undefined,
        id: inputId = '',
      }: PropsType & Omit<InputProps<C>, keyof Input> & BoxProps<C>,
      ref: PolymorphicRef<C>
    ) => {
      const inputRefs: any[];

      return (
          <Box
              ref={ref}
              data-testid="text-field"
              {...props}
            >
          </Box>
       );
    }
);
