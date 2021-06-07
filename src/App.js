//root App component

import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  return (
    //must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element
    <div className="container">
      <Header/>
      <Tasks/>
    </div>
  );
}

export default App;
