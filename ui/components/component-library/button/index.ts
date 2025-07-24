import { Size } from '../../../helpers/constants/design-system';

export { Button } from './button';
export { ButtonSize, ButtonVariant } from './button.types';
export type { ButtonProps } from './button.types';

export const BUTTON_SIZES = {
  SM: Size.SM,
  MD: Size.MD,
  LG: Size.LG,
  INHERIT: Size.inherit,
  AUTO: Size.auto,
};

export const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  LINK: 'link',
};
