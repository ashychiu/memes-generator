import React from "react";
import ImageList from "../ImageList/ImageList";
import { Component } from "react";
import "./MemePage.scss";
import addCaption from "../../assets/images/add-caption.png";

class MemePage extends Component {
  state = {
    userInput: "",
  };
  validateData = () => {
    const { userInput } = this.state;
    if (!userInput) {
      return false;
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("target", e.target.userInput.value);
    const data = e.target.userInput.value;
    if (this.validateData) {
      this.setState({ userInput: data });
      const caption = document.querySelector(".caption__text");
      caption.append(data);
    }
    console.log("input", data);
    e.target.reset();
    // alert("Generating your meme!");
  };

  render() {
    console.log(this.handleSubmit);

    console.log("meme", this.props);

    let selectedMeme = this.props.match.params.memeId;
    console.log(selectedMeme);
    const meme = this.props.list.find((item) => item.id === selectedMeme);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="caption">
          <img className="caption__add-caption" src={addCaption} />
          <img className="caption__image" src={meme.url} />
          <p className="caption__text">{}</p>

          <label htmlFor="text-box1">Type your caption here:</label>
          <input
            name="userInput"
            // value= {this.state.userInput}
            id="text-box1"
            type="text"
            onChange={this.handleChange}
          />
          <button className="caption__button">Generate meme</button>
        </div>
      </form>
    );
  }
}

export default MemePage;
