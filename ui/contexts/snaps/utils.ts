export const mergeValue = <Type extends State>(
  state: InterfaceState,
  name: string,
  value: Type | null,
  form?: string,
): InterfaceState => form
  ? { ...state, [form]: { ...(state[form] as FormState), [name]: value } }
  : { ...state, [name]: value };
