import React from 'react';
import logo from 'C:/Users/daily/Code/ReactJS/Codecademy-Raven/raven/src/logo.svg';
import './App.css';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
          };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses,
      })
    })    
  }
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    )
  }
}

export default App;
