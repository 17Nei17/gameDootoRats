import React from "react";
import { useEffect, useState, useRef } from "react";
import image1 from "./cats/0/base/1/1.png"

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = { image: '' };
  }

  componentDidMount() {
    this.createCanvas();
    this.loadImage();
  }

  componentDidUpdate() {
    this.clearCanvas();
    this.createCanvas();
    this.loadImage();
  }
  clearCanvas() {
    const ctx = this.canvas.current.getContext('2d');
    ctx.clearRect(0, 0, this.props.width, this.props.height);
  }

  loadImage() {

    let currentCat = this.props.currentCat;
    Object.keys(this.props.currentCat) && Object.keys(this.props.currentCat).forEach(element => {
      if (currentCat[element] && currentCat[element]) {
        import(`./cats/0/${currentCat[element][0]}/${currentCat[element][2]}/${currentCat[element][1]}.png`).then(image => {
          this.updateCanvas(image.default, 0);
        });
        import(`./cats/-1/${currentCat[element][0]}/${currentCat[element][2]}/${currentCat[element][1]}.png`).then(image => {
          this.updateCanvas(image.default, -1);
        });
        import(`./cats/1/${currentCat[element][0]}/${currentCat[element][2]}/${currentCat[element][1]}.png`).then(image => {
          this.updateCanvas(image.default, 1);
        });
        import(`./cats/5/${currentCat[element][0]}/${currentCat[element][2]}/${currentCat[element][1]}.png`).then(image => {
          this.updateCanvas(image.default, 5);
        });
      }
    });
    // async function processArray(context) {
    //   let currentCat = context.props.currentCat;
    //   let categoryName = context.props.categoryName;
    //   const promises = categoryName.map(element => {
    //     if (currentCat[element] && currentCat[element]) {
    //       import(`./cats/0/${currentCat[element][0]}/1/${currentCat[element][1]}.png`).then(image => {
    //         context.updateCanvas(image.default, 0);
    //       });
    //       import(`./cats/-1/${currentCat[element][0]}/1/${currentCat[element][1]}.png`).then(image => {
    //         context.updateCanvas(image.default, -1);
    //       });
    //       import(`./cats/1/${currentCat[element][0]}/1/${currentCat[element][1]}.png`).then(image => {
    //         context.updateCanvas(image.default, 1);
    //       });
    //       import(`./cats/5/${currentCat[element][0]}/1/${currentCat[element][1]}.png`).then(image => {
    //         context.updateCanvas(image.default, 5);
    //       });
    //     }
    //   });
    //   await Promise.all(promises);
    //   console.log('Done!');
    // }
    // processArray(this);
  };




  createCanvas() {
    const ctx = this.canvas.current.getContext('2d');
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, this.props.width, this.props.height);
  }

  updateCanvas(imageSrc = image1, folder) {
    let leftMargin = 0;
    if (folder === 0) {
      leftMargin = 0;
    } else if (folder === -1) {
      leftMargin = 150;
    } else if (folder === 1) {
      leftMargin = 300;
    }
    else if (folder === 5) {
      leftMargin = 450;
    }
    const ctx = this.canvas.current.getContext('2d');
    let img = new Image();
    img.src = imageSrc;
    img.onload = function () {
      ctx?.drawImage(img, leftMargin, 0, 100, 150);
    }
  }

  render() {
    return (
      <canvas ref={this.canvas} width={this.props.width} height={this.props.height} className="canvas" />
    );
  }
}
