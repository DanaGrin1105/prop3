import React from 'react';
import './App.css';

class Card extends React.Component {
  render() {
      const { imgUrl, title, text, dot } = this.props;
      return (
          <div className="card">
              <Image imgUrl={imgUrl} />
              <Info title={title} text={text} />
              <Dots dot={dot} />
          </div>
      );
  }
}

class Image extends React.Component {
  render() {

      return (
          <div className="image">
              <img src={this.props.imgUrl} />
          </div>
      );
  }
}

class Info extends React.Component {
  render() {

      return (
          <div className="title">
              <h4>{this.props.title}</h4>
              <p>{this.props.text}</p>
          </div>
      );
  }
}

class Dots extends React.Component {
  render() {
    let isLeftSelected = this.props.dot === 'left';
    let isMiddlSelected = this.props.dot === 'middle';
    let isRightSelected = this.props.dot === 'right';

      return (
          <div className="dots">
            <div className={`dot ${ isLeftSelected ? 'selected' : '' }`}/> 
            <div className={`dot ${ isMiddlSelected ? 'selected' : '' }`}/> 
            <div className={`dot ${ isRightSelected ? 'selected' : '' }`}/> 
          </div>
      );
  }
}
class App extends React.Component {
  render() {
      return (
          <div className="main">
              <Card imgUrl={"img-travel.jpg"} title={"Ready to Travel"} text={"fly fly fly fly"} dot={"left"} />
              <Card imgUrl={"img-date.jpg"} title={"Select the Date"} text={"date date date"} dot={"middle"} />
              <Card imgUrl={"img-home.jpg"} title={"Feels Like Home"} text={"home home home"} dot={"right"}/>
          </div>
      );
  }
}

export default App;
