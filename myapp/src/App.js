import Ninjas from './ninja';

function App() {
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>

      <Ninjas name="Mageta" age="40" belt="yellow" />

      <Ninjas name="Sukulu" age="100" belt="black" />
    </div>
  );
}

export default App;
