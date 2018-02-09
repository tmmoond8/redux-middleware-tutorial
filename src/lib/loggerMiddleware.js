const loggerMiddleware = store => next => action => {
  // 미들웨어 내용
  console.log('현재 상태', store.getState());

  console.log('action: ', action);

  const result = next(action);

  console.log('next : ', store.getState());
  console.log('\n');

  return result;
}

export default loggerMiddleware;