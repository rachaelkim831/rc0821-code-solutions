import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0
    };
    this.changeImg = this.changeImg.bind(this);
    this.interval = setInterval(() => {
      this.changeImg(this.state.currentImgIndex + 1);
    }, 3000);
  }

  changeImg(i) {
    if (i === this.props.images.length) {
      i = 0;
    }
    if (i === -1) {
      i = this.props.images.length - 1;
    }
    this.setState({ currentImgIndex: i });
    this.reset();
  }

  reset() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.changeImg(this.state.currentImgIndex + 1);
    }, 3000);
  }

  render() {
    return (
      <div className="carousel">
        <div className="img-container">
          <i onClick={() => this.changeImg(this.state.currentImgIndex - 1)} className="fas fa-angle-left arrow"></i>
          {this.props.images.map((image, i) => {
            return (
              <img className={`images ${this.state.currentImgIndex === i ? '' : 'hidden'}`} src={image} alt={`image ${i}`} key={i}/>
            );
          })}
          <i onClick={() => this.changeImg(this.state.currentImgIndex + 1)} className="fas fa-angle-right arrow"></i>
          <div className="circle-container">
            {this.props.images.map((image, i) => {
              return (
                <i onClick={() => this.changeImg(i)} className={`far fa-circle circle ${this.state.currentImgIndex === i ? 'active' : ''}`} key={i}></i>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
