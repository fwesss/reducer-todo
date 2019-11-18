export const updateObject = (oldObject, newValues) => {
  return { ...oldObject, ...newValues };
};

export const updateItemInArray = (array, itemId, updateItemCallback) => {
  return array.map(item => {
    return item.id !== itemId ? item : updateItemCallback(item);
  });
};

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    return Object.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}
