import type { StyleUtilityProps, PolymorphicComponentPropWithRef } from '../box';

export enum ContainerMaxWidth {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}

export type ContainerStyleUtilityProps = StyleUtilityProps & {
  className?: string;
  maxWidth?: ContainerMaxWidth;
};

export type ContainerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ContainerStyleUtilityProps>;

export type ContainerComponent = <C extends React.ElementType = 'div'>(
  props: ContainerProps<C>,
) => React.ReactElement | null;
