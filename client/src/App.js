import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import MemesList from "./components/MemesList/MemesList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MemePage from "./components/MemePage/MemePage";

class App extends Component {
  state = {
    memesList: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/memes").then((response) => {
      console.log("before data return:", response.data);
      this.setState({
        memesList: response.data,
      });
      console.log("after data return:", this.state.memesList);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <Route path='/' exact render={(renderProps) => {
           <memesList
           list={this.state.memesList}
           {...renderProps}
           /> */}

          {/* }}/> */}
          <Route path="/" exact>
            <MemesList list={this.state.memesList} />
          </Route>

          <Route
            path="/meme/:memeId"
            render={(routerProps) => {
              return this.state.memesList.length ? (
                <MemePage {...routerProps} list={this.state.memesList} />
              ) : null;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
