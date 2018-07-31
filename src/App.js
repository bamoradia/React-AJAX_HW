import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
      newsArticles: [],
      username: '',
      loggedIn: false
    }
  }

  getNews = async () => {
    try {

      const news = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=03cb47382bbe471eb910e746967e4bcc');
      const newsJSON = await news.json();

      return newsJSON

    } catch (err) {
      console.log('error with the getNews method inside of App.js\n', err)
      return err
    }
  }

  componentDidMount = () => {
    //we want to setState immediately after we get the data
    this.getNews().then((news) => {

      this.setState({
        newsArticles: news
      })
    });
  }

  login = (username) => {
    this.setState({
      username: username,
      loggedIn: true
    })
  }

  render() {

    console.log(this.state.newsArticles.articles)
    return (
      <div className="App">
        {(this.state.loggedIn) ? <MainContainer newsArticles={this.state.newsArticles.articles}/> :  <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
