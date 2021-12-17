import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import ImageList from "./components/ImageList/ImageList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MemePage from "./components/MemePage/MemePage";

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
      <BrowserRouter>
        <Switch>
          {/* <Route path='/' exact render={(renderProps) => {
           <ImageList
           list={this.state.imageList}
           {...renderProps}
           /> */}

          {/* }}/> */}
          <Route path="/" exact>
            <ImageList list={this.state.imageList} />
          </Route>

          <Route
            path="/meme/:memeId"
            render={(routerProps) => {
              return this.state.imageList.length ? (
                <MemePage {...routerProps} list={this.state.imageList} />
              ) : null;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
