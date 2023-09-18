import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Todo List</h1>
      <ToDoForm></ToDoForm>
      <ToDoList></ToDoList>
      </div>
    </div>
  );
}

export default App;
