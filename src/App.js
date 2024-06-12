import React, {Component} from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import PageBar from "./components/PageBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      apiKey: process.env.REACT_APP_API,
      totalResults: 0,
      currentPage: 1
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=${this.state.apiKey}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], totalResults: data.total_results });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=${this.state.apiKey}&page=${pageNumber}`)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber });
    });
  }

  render() {
    const totalPages = Math.ceil(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <List movies={this.state.movies} />
        {
          this.state.totalResults > 20 && 
          <PageBar pages={totalPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
        }
      </div>
    );
  }
}
export default App;
