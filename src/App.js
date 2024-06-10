import React, {Component} from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      apiKey: process.env.REACT_APP_API,
    };
  }

  handleSubmit = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.state.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchBar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;