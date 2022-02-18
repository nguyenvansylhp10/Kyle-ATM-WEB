import React from "react";
import "./ProcessClient.scss";
import { getATMS } from "../../../api/atms";
import { useEffect, useState } from "react";
import { ATM, ATMResponseData } from "../../../interface";
export default function ProcessClient() {
  const [processdClient, setprocessdClient] = useState<
    Array<{
      clientName: string;
      atmName: string;
      atmId: string;
    }>
  >([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getATMS();
      setprocessdClient(res.processedClient);
    }, 2000);
  }, []);

  return (
    <div className="process">
      {processdClient &&
        processdClient.map((item, index) => (
          <div className="process_done">
            <br></br>
            <p>{item.clientName}</p>

            <p></p>
          </div>
        ))}
    </div>
  );
}
