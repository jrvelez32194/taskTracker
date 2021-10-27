import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const [tasks, seTasks] = useState([
    {
      id: 1,
      text: "test1",
      day: "day1",
      reminder: false,
    },
    {
      id: 2,
      text: "test2",
      day: "day2",
      reminder: false,
    },
  ]);
  const deleteTask = (id) => {
    console.log("DELETE", id);
  };
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
