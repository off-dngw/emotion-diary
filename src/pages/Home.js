import React, { useContext, useEffect, useState } from "react";
import Myheader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curdate, setCurDate] = useState(new Date());

  const headText = `${curdate.getFullYear()}년 ${curdate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curdate.getFullYear(),
        curdate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curdate.getFullYear(),
        curdate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((el) => firstDay <= el.date && el.date <= lastDay)
      );
    }
  }, [diaryList, curdate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curdate.getFullYear(), curdate.getMonth() + 1, curdate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curdate.getFullYear(), curdate.getMonth() - 1, curdate.getDate())
    );
  };
  return (
    <div>
      <Myheader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
