import apisauce from 'apisauce';

// 마스크 리스트
export const maskApi = apisauce.create({
  baseURL: 'https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1',
  headers: {Accept: 'application/json'},
  timeout: 15000,
});

export const getMask = addr => {
  console.log(addr);
  return maskApi.get('/storesByAddr/json?address=서울특별시 동작구 노량진동');
};