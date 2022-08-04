import { useEffect, useState, Component } from "react";
import "./App.css";

import {months, days} from "./constants";

function App() {
  const [date, setDate] = useState(new Date());
  const [calData, setCalData] = useState([]);

  useEffect(() => {
    createCalenderDates(date.getMonth(), date.getFullYear());
  }, [date])
  
  const createCalenderDates = (month, year) => {
    const dates = [];
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    let date = 1;
    for (let i = 0; i < firstDay; i++) {
      dates.push("");
    }
    for (let i = 0; i < lastDate; i++) {
      dates.push(date);
      date++;
    }
    const datesChunk = [];
    for (let i = 0; i < dates.length; i += 7) {
      datesChunk.push(dates.slice(i, i + 7));
    }
    setCalData(datesChunk);
  }

  const nextMonth = () => {
    if(date.getMonth() === 11) {
      setDate(new Date(date.getFullYear() + 1, 0, 1));
    }else {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    }
  }

  const prevMonth = () => {
    if(date.getMonth() === 0) {
      setDate(new Date(date.getFullYear() - 1, 11, 1));
    }else{
      setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
    }
  }

  return (
    <div className="App">
      <h3>{months[date.getMonth()]} - {date.getFullYear()}</h3>
        <section>
          <table style={{gap:"10px"}}>
            <thead>
              <tr>
                {days.map((day, index) => <th key={index}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {calData.map((dateRow, index) => {
                return (
                  <tr key={index}>
                    {dateRow.map((dt, index) => {
                      const isCurrentDate = (new Date().getMonth() === date.getMonth() 
                          && new Date().getFullYear() === date.getFullYear()
                          && new Date().getDate() === dt)
                      return (
                        <td key={index} style={{
                            backgroundColor: isCurrentDate ? "red" : "",
                            color: isCurrentDate ? "white" : "black",
                            fontWeight: isCurrentDate ? "bold" : "normal",
                            fontSize: isCurrentDate ? "1.2rem" : "1rem",
                            borderRadius: isCurrentDate ? "15px" : "",
                          }}>
                          {dt}
                        </td>
                      );
                    }
                    )}
                  </tr>
                );
                }
              )}
            </tbody>
          </table>
        </section>
          <button onClick={prevMonth} style={{marginRight:"30px"}}>Prev</button>
          <button onClick={nextMonth}>Next</button>
    </div>
  );
}
export default App;
