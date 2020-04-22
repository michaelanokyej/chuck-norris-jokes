import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchRandomJoke, fetchJokeCategories } from "./api";

class App extends Component {
  state = {
    value: "",
    icon_url: "",
    categories: [],
    category: ""
  };

  async componentDidMount() {
    const { value, icon_url } = await fetchRandomJoke();
    const categories = await fetchJokeCategories();
    this.setState({ value, icon_url, categories: categories.data });
  }

  handleCategoryChange = async (category) => {
    const { value, icon_url } = await fetchRandomJoke(category)
    this.setState({ value, icon_url });
  }

  handleNextButton = async (category) => {
    const { value, icon_url } = await fetchRandomJoke(category)
    this.setState({ value, icon_url });
  }

  render() {
    return (
      <div className={styles.container}>
        
        <div>
          <img src={this.state.icon_url} />
        </div>
        <div className={styles.title}><h1>Chuck Norris Jokes</h1></div>
        

        <div>
          <blockquote className={styles.blockquote}>
          <p className={styles.blockquote_text}>{this.state.value}</p>
          </blockquote>
        </div>
        <div className={styles.selectButtonDiv}>
          <select onChange={(e) => {
            this.setState({category: e.target.value})
            this.handleCategoryChange(e.target.value)}} className={styles.selectBorder}>
            <option value="">random</option>
            {this.state.categories.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button onClick={(e) => {
            e.preventDefault();
            this.handleNextButton(this.state.category)
          }} className={styles.selectBorder}>Next</button>
          <button className={styles.devlink} className={styles.selectBorder}><a href="https://michaelanokye.com/" target="_blank">Developer</a></button>
        </div>
      </div>
    );
  }
}

export default App;
