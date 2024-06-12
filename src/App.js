import React, {Component} from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import PageBar from "./components/PageBar";
import MovieCard from "./components/MovieCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      apiKey: process.env.REACT_APP_API,
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
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

  viewInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({ currentMovie: filteredMovie})
  }

  closeInfo = () => {
    this.setState({currentMovie: null})
  }


  render() {
    const totalPages = Math.ceil(this.state.totalResults / 20);
    return (
      <div className="App">
        <Nav />
        { this.state.currentMovie == null ?
        <div><SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <List movies={this.state.movies} viewInfo ={this.viewInfo} /></div> :
        <MovieCard closeInfo = {this.closeInfo} />
        }
        {
          this.state.totalResults > 20 && 
          <PageBar pages={totalPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
        }
      </div>
    );
  }
}
export default App;
