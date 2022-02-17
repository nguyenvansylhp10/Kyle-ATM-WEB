import React from "react";
import "./Queue.scss";
import { useEffect, useState } from "react";
import { ATM, ATMResponseData } from "../../../interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../interface";
import { AppState } from "../../../redux/index";
import { getATMS } from "../../../api/atms";
import { ListQueue } from "../../../redux/atmAction";

export const Queue = () => {
  const state = useSelector((state: AppState) => state.counterReducer.queue);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getATMS();
      dispatch(ListQueue(res.queue));

    }, 5000);
  }, []);

  return (
    <div className="queue">
      {state &&
        state.map((item: any, index: number) => (
          <div className="queue_box">
            <div className="queue_box_img">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt=""
              />
            </div>
            <div className="queue_box_infor">
              <div className="queue_box_infor_username">
                <p>{item.name}</p>
              </div>
              <div className="queue_box_infor-transaction">
                {item.transaction}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
