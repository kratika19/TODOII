import Header from "../src/Components/Header"
import Todos from "../src/Components/Todos"
import Footer from "../src/Components/Footer"
import './App.css';

function App() {

  const onDelete = (todo) => {
    console.log("I'm deleting it!!", todo);
  }

  let todos = [{
    sno: 1,
    title: "Go to Market",
    desc: "You need to go to market to get the job done!",
  },
  {
    sno: 2,
    title: "Go to Gym",
    desc: "You need to go to gym to get the job2 done!",
  },
  {
    sno: 3,
    title: "Go to Mall",
    desc: "You need to go to mall to get the job3 done!",
  },
  ]
  return (
    <>
      <Header title="Todoii" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
