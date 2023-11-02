import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  // useState를 하게되면 첫번째는 state,
  //두번째는 state를 변화시키는 함수를 반환합니다.
  console.log("컴포넌트 업데이트");
  React.useEffect(function () {
    setTime(time + 1);
  }, []);
  return (
    <div>
      <h3>{time}초</h3>
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
