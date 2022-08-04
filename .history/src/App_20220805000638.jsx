import { useEffect, useState, Component } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState(name);

  const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  }

  useEffect(() => {
    setDay(weekDays[date.getDay()]);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => console.log(data));
  })
  

  const getDay = (e) => {
    console.log(new Date(e.target.value).toDateString());
    setDate(new Date(e.target.value));
    setDay(weekDays[new Date(e.target.value).getDay()]);
  }

  return (
    <div className="App">
        <input type="date" placeholder="date" onChange={getDay}/>
        <h3>Day on {date.toLocaleDateString()}  will be {day}</h3>
    </div>
  );
}

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       date: new Date(),
//       day: "",
//       name: "Ram"
//     }
//   }

//   componentDidMount(){
//     const weekDays = {
//       0: "Sunday",
//       1: "Monday",
//     }
//     console.log(weekDays[this.state.date.getDay()]);
//   }

//   getDay = (e) => {
//     this.setState({
//       date: new Date(e.target.value),
//       day: weekDays[new Date(e.target.value).getDay()],
//     })
//   }

//   changeName = () => {
//     this.setState({
//       name: "Ramesh"
//     })
//   }

//   render(){
//     return(
//       <div className="App">
//         <input type="date" placeholder="date" onChange={this.getDay}/>
//         <h3>Day on {this.state.date.toLocaleDateString()}  will be {this.state.day}</h3>
//         <button onClick={this.changeName}>Click</button>
//         <br/>
//         <span>{this.state.name}</span>
//       </div>
//     )
//   }
// }

export default App;
