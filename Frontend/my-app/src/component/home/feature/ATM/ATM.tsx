import React from "react";
import "./ATM.scss";
import { postAtm } from "../../../api/atms";
import { useEffect, useState } from "react";
import { getATMS } from "../../../api/atms";
import { useDispatch, useSelector } from "react-redux";
import { ListAtm } from "../../../redux/atmAction";
import { RootState } from "../../../interface";
import { AppState } from "../../../redux/index";
import { removeAtm } from "../../../api/atms";
export default function ATM() {
  const Listatm = useSelector(
    (Listatm: AppState) => Listatm.counterReducer.atm
  );
  const [state, setstate] = useState(Listatm);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getATMS();
      dispatch(ListAtm(res.atm));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRemove = async (id: string) => {
    const res = await removeAtm(id);
    const newstate = state.filter((item: any) => {
      return item.id !== id;
    });
    setstate(newstate);
    console.log(state);
  };

  return (
    <div className="div">
      {Listatm &&
        Listatm.map((item: any, index: number) => (
          <div className="CayATM">
            <div className="CayATM_img">
              <img
                src="http://hanoimoi.com.vn/Uploads/ngohuong/2015/1/2/ATM.jpg"
                width="50px"
                height="50px"
                alt=""
              />
            </div>

            <div className="CayATM_name">
              <p>{item.name}</p>
            </div>

            <div className="CayATM_user">
              <p>{item.client}</p>
            </div>
            <div className="CayATM_status">
              <p>{item.status}</p>
            </div>
            <div
              className="CayATM_delete"
              onClick={() => handleRemove(item.id)}
            >
              <p>Xóa</p>
            </div>
          </div>
        ))}
    </div>
  );
}
