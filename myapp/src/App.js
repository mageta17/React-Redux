import Ninjas from './ninja';
import AddNinja from './addNinja';
import React, { Component } from 'react';

class App extends Component {
  state = {
    ninjas : [
      { name: 'Mageta', age: 25, belt: 'black', id: 1 },
      { name: 'Winnie', age: 28, belt: 'yellow', id: 2 },
      { name: 'Msuya', age: 20, belt: 'white', id: 3 },
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>

        <Ninjas deleteNinja={ this.deleteNinja} ninjas={ this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
