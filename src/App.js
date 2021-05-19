import Header from "./components/Header"

function App() {
  return (
    //must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
