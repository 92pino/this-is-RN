import {call, put, takeLatest} from 'redux-saga/effects';
import {getMask} from '../../api';
import {GET_MASK_REQUEST, getMaskSuccess, getMaskFail} from './Mask.Action';
import {sendNetworkFail} from '../../actions';

export function* watchGetMask() {
  yield takeLatest(GET_MASK_REQUEST, handleGetMask);
}

function* handleGetMask(action) {
  const response = yield call(getMask, action.payload);

  if (response.ok) {
    yield put(getMaskSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getMaskFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getMaskFail(response.problem));
    }
  }
}