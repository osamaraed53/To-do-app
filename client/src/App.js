import { Provider } from "react-redux";
import "./App.css";
import { TodoWrapper } from "./component/TodoWrapper";
import TodoList from "./component/Todo";
import TodoForm from "./component/TodoForm";

function App() {
  return (
    <>
      <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm />
        <TodoWrapper />
        <TodoList />
      </div>
    </>
  );
}

export default App;
