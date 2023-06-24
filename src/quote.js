import React from "https://cdn.skypack.dev/react@17.0.1";
import './quote.css';

export class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: "",
      color: ""
    };
    this.JSON =
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

    this.getRandomQuote = this.getRandomQuote.bind(this);
  }
  componentDidMount() {
    fetch(this.JSON)
      .then((data) => data.json())
      .then((quotes) =>
        this.setState({ quotes }, () => {
          this.setState({ quote: this.getRandomQuote() });
        })
      );
  }
  getRandomQuote = () => {
    let colors = [
      "brown",
      "darkblue",
      "purple",
      "#246139",
      "darkgreen",
      "#d8800c",
      "#058872",
      "#be137d",
      "#457B9D",
      "#c5b206"
    ];
    let randomColor = Math.floor(Math.random() * 10);
    let randomIndex = Math.floor(Math.random() * 100);
    this.setState({
      quote: this.state.quotes[randomIndex],
      color: colors[randomColor]
    });
    let new_quote = document.getElementsByClassName("new-quote");
    let quote = document.getElementsByClassName("quote-text");
    let author = document.getElementsByClassName("author");

    document.body.style.backgroundColor = this.state.color;
    new_quote[0].style.background = this.state.color;
    quote[0].style.color = this.state.color;
    author[0].style.color = this.state.color;

    return this.state.quotes[randomIndex];
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div id="quote-box">
          <h1
            style={{ color: "black", paddingTop: "20px", textAlign: "center" }}
          >
            Quote Generator
          </h1>
          <div class="quote-text">
            <i class="fa fa-quote-left" />
            {this.state.quote.quote}
          </div>
          <div class="author">- {this.state.quote.author}</div>
          <div className="buttons ">
            <a href="https://www.twitter.com/">
              <button className="btn btn-secondary mx-1">
                <i className="fa fa-twitter" style={{ color: "white" }} />
              </button>
            </a>
            <a href="https://www.facebook.com/">
              <button className="btn btn-secondary" style={{ color: "white" }}>
                <i className="fa fa-facebook" />
              </button>
            </a>
            <button className="new-quote" onClick={this.getRandomQuote}>
              {" "}
              New Quote{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
