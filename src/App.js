import React, {Component} from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      apiKey: process.env.REACT_APP_API,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=${this.state.apiKey}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <List movies={this.state.movies} />
      </div>
    );
  }
}
export default App;