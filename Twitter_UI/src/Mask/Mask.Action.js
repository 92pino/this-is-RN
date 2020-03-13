export const GET_MASK_REQUEST = 'GET_MASK_REQUEST';
export const GET_MASK_SUCCESS = 'GET_MASK_SUCCESS';
export const GET_MASK_FAIL = 'GET_MASK_FAIL';

export const getMaskRequest = addr => {
  return {
    type: GET_MASK_REQUEST,
    payload: {addr},
  };
};

export const getMaskSuccess = data => {
  return {
    type: GET_MASK_SUCCESS,
    payload: {data},
  };
};

export const getMaskFail = err => {
  return {
    type: GET_MASK_FAIL,
    payload: {err},
  };
};