export function itemsHasErrored(state = false, action) {
    if (action.type === 'ITEMS_HAS_ERRORED') {
        return action.hasErrored;
    } else {
        return state;
    }
}


export function itemsIsLoading(state = false, action) {
  if (action.type === 'ITEMS_IS_LOADING') {
    console.log('Action' + action.isLoading);
      return action.isLoading;
  } else {
      return state;
  }
}

export function items(state = [], action) {
  if (action.type === 'ITEMS_FETCH_DATA_SUCCESS') {
      return action.items;
  } else {
      return state;
  }
}
