import React, { Component } from "react";
import NewItem from "./NewItem"; // Assuming you have a NewItem component

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2024-06-08&to=2024-06-08&sortBy=popularity&apiKey=52fc0c84e7a7411db53cb9ce68786ced"
    );
    const data = await response.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
    });
  };

  handlePreviousClick = () => {
    this.setState({ page: this.state.page - 1 }, this.fetchArticles);
  };

  handleNextClick = () => {
    this.setState({ page: this.state.page + 1 }, this.fetchArticles);
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>All Articles</h1>
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    imgUrlId={element.url.slice(0, 30)}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-5">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &#8592; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
