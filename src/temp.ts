/**
 * 매개변수가 함수 일 경우 실행해서 리턴값을 리턴하고 아니라면 매개변수를 리턴 합니다
 **/
function toValue<T>(maybeFunction: T | (() => T)): T {
  // maybeFunction 타입이 함수라면 실행하고 아니라면 maybeFunction를 리턴 합니다
  return typeof maybeFunction === 'function' ? maybeFunction() : maybeFunction
}

/**
 * 한번만 실행되고 두번 이상 실행되면 저장 해둔 리턴값을 반환 하는 함수를 만듭니다
 **/
function once<T, A>(recipe: ((...args:A)=>T)): ((...args: A)=>T) {
  let result: T
  return function (...args: A): T {
    // 저장 해둔 결과 값이 있으면 그 값을 리턴 합니다
    if (result) {
      return result
    }
    // 저장 해둔 결과 값이 없다면 recipe 호출하여 결과 값을 저장하고 리턴 합니다
    result = recipe(...args)
    return result
  }
}
