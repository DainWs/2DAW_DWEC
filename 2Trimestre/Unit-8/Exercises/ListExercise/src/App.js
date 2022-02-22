import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";

var lista = [ 'Jose', 'Javi', 'Pedro', 'Antonio' ];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      titulo: "Ejercicio Lista Jose Antonio Duarte"
    }
  }

  onChangeTitle(instance) {
    instance.setState({ titulo: "hola" });
    instance.forceUpdate();
    console.log('hola');
  }

  render() { 
    return (
      <div className="App">
        <Header titulo={this.state.titulo}></Header>
        <Body nombres={lista} onChangeTitle={() => {this.onChangeTitle(this)}}></Body>
      </div>
    );
  }
}

export default App;
