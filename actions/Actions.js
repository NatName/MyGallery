export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return async (dispatch) => {
      try {
         dispatch(itemsIsLoading(true));

         const response = await fetch(url);
         if (!response.ok) {
            throw Error(response.statusText);
         }
         dispatch(itemsIsLoading(false));

         const items = await response.json();
         dispatch(itemsFetchDataSuccess(items));
      }
      catch(err) {
        dispatch(itemsHasErrored(true));
      }
    };
}
