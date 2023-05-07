import './App.css';
import Canvas from "./Canvas.js"
import Wrapper from "./Wrapper.js"
import Kns from "./kns_def.js"
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {
        "Основной цвет": [
          "base",
          "3",
          1
        ],
        "Уши": [
          "base_ears",
          "1",
          1
        ],
        "Хвост": [
          "base_tail",
          "2",
          1
        ]
      }
    };
  }


  updateData = (categoryName, value) => {

    this.setState({
      currentCat: { ...this.state.currentCat, [categoryName]: value }
    })
  }

  componentDidUpdate() {
    console.log(this.state)
  }

  // componentDidMount() {

  // }


  render() {
    return (
      <div className="App">
        <Canvas width="600" height="160" currentCat={this.state.currentCat} />
        <Wrapper Kns={Kns} currentCat={this.state.currentCat} updateData={this.updateData} categoryArr={this.state.categoryName} />
      </div>
    );
  }
}

export default App;
