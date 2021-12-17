import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import ImageList from "./components/ImageList/ImageList";

class App extends Component {
  state = {
    imageList: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/memes").then((response) => {
      console.log("before data return:", response.data);
      this.setState({
        imageList: response.data,
      });
      console.log("after data return:", this.state.imageList);
    });
  }

  render() {
    return (
      <div>
        <ImageList list={this.state.imageList} />
      </div>
    );
  }
}
export default App;
