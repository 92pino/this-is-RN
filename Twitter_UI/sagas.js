import {all} from 'redux-saga/effects';
import {watchGetMask} from './src/Mask/Mask.Saga';

export default function* rootSaga() {
  yield all([watchGetMask()]);
};