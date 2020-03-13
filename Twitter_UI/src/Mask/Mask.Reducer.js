import {GET_MASK_REQUEST, GET_MASK_SUCCESS, GET_MASK_FAIL} from './Mask.Action';

const initialState = {fetching: false, data: null, err: null};

export const getMask = (state = initialState, action) => {
  switch (action.type) {
    case GET_MASK_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case GET_MASK_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case GET_MASK_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    default:
      return state;
  }
};