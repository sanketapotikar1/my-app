import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = ["sanket", "rahul", "shubham"];

  const student = [
    {
      name: "Sanket",
      pic: "https://i.pinimg.com/236x/40/3c/4e/403c4e048ad46d1329677b1ef75146ff.jpg",
    },
    {
      name: "Rahual",
      pic: "https://i.pinimg.com/236x/b2/c6/5e/b2c65ec5d9a395bf22f737acf95b3fd3.jpg",
    },
    {
      name: "Shubham",
      pic: "https://i.pinimg.com/236x/4b/c9/19/4bc9190c1fad837ce0c682793eae7e0e.jpg",
    },
    {
      name : "Neha",
      pic : "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
    },
    {
      name : "shubham chi Item",
      pic : "https://pbs.twimg.com/media/E1v7k8KVEAUULnW.jpg"
    }
  ];
  return (
    <div className="App">
      
      {student.map((student)=>
      (
        <Message name={student.name} pic={student.pic}/>
      ))}



      {/* {name.map((nm) => (
        <Welcome name={nm} />
      ))} */}
    </div>
  );
}

export default App;

function Welcome(props) {
  return (
    <>
      <h1>
        Hello, {props.name} 😊💖<p>{}</p>
      </h1>
    </>
  );
}

function Message(props) {
  return (
    <>
      <img className="profile-pic" src={props.pic} />

      <h1>
        Hello, {props.name} 😊💖<p>{}</p>
      </h1>
    </>
  );
}
