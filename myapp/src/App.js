import Ninjas from './ninja';
import AddNinja from './addNinja';

function App() {
  const state = {
    ninjas : [
      { name: 'Mageta', age: 25, belt: 'black', id: 1 },
      { name: 'Winnie', age: 28, belt: 'yellow', id: 2 },
      { name: 'Msuya', age: 20, belt: 'white', id: 3 }
    ]
  }
  return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>

      <Ninjas ninjas={ state.ninjas} />
      <AddNinja />
    </div>
  );
}

export default App;
