export const updateObject = <T extends {}>(oldObject: T, newValues: T): T => {
  return { ...oldObject, ...newValues };
};

export const updateItemInArray = (
  array: readonly { readonly id: number }[],
  itemId: number,
  updateItemCallback: (todo: any) => { readonly completed?: boolean; readonly id?: number }
): readonly object[] => {
  return array.map(item => {
    return item.id !== itemId ? item : updateItemCallback(item);
  });
};

type CreateReducerParams = {
  readonly initialState: any;
  readonly handlers: any;
};

export function createReducer({ initialState, handlers }: CreateReducerParams) {
  return function reducer(
    state = initialState,
    action: { readonly type?: string | number | symbol }
  ) {
    return Object.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}
