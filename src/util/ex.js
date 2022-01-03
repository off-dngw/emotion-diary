useEffect(() => {
  // localStorage.setItem("item1", 10);
  localStorage.setItem("item2", [2, 4, 5, 6]);

  // 객체는 기본적으로 데이터타입이 문자열로 저장이 됩니다.
  // 그 값을 꺼낼 때도 문자열로 저장이 되어있기 때문에 문자열로 값을 꺼내옵니다.
  // 예를 들어
  // localStorage.setItem("item3", JSON.stringify({ value: 30 }));
  // JSON.stringfy를 사용해 value 의 넘버타입 30을 넣었지만
  // 그 값을 꺼내서 사용을 하려고하면
  // 문자열 value : "30" 이 반환이 된다.
  // 원래 본연의 값으로 받고 싶으면
  // const item2 = localStorage.getItem("item3"); 이 아닌
  // const item2 = JSON.PARSE(localStorage.getItem("item3")) 다시 파싱해줘서 가져와야한다.

  const item1 = localStorage.getItem("item1");
  const item2 = localStorage.getItem("item3");
  const item3 = localStorage.getItem("item2");
  // item3 를 콘솔로 찍어보면 item3는 value : "30" 문자열 30으로
  console.log({ item1, item2, item3 });
}, []);
