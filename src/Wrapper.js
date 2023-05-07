import React from "react";
import { useEffect, useState, useRef } from "react";
import ColorButton from "./ColorButton.js"


export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.listItems = this.props.Kns.parts;
    this.state = { listItems: '', selectedItem: this.props.Kns.parts[0].name, selectedSubItem: '' };
    // this.iconArray = [];
  }

  setSelectedItem(newName) {
    this.setState({
      selectedItem: newName, selectedSubItem: []
    });
  }

  setSelectedSubItem(newSubName, id) {
    this.setState({
      selectedSubItem: [newSubName, id]
    });
  }


  // loadIcon() {
  //   // liconArray = [];
  //   this.listItems.forEach(item => {
  //     // return (
  //     return item.info && item.info.forEach((subItems, index) => {
  //       if (this.state.selectedItem == item.name) {
  //         return this.iconArray.push(`src/cats/0/${item.folder}/icons/${subItems.id}.png`);
  //         // import(`./cats/0/${item.folder}/icons/${subItems.id}.png`).then(image => {
  //         //   return image;
  //         // }).catch(error => error);
  //       }
  //     })
  //     // )

  //   })
  // }


  componentDidMount() {
    // this.loadIcon();
  }
  componentDidUpdate() {
    // this.loadIcon();
  }

  render() {
    return (
      <div className="wrapper">
        {this.listItems.map((item, index) => {
          return (
            <div key={item.name + index} className="groupItems">
              <div className="header" onClick={() => this.setSelectedItem(item.name)}>{item.name}</div>
              {
                item.info && item.info.map((subItems, index) => {
                  if (this.state.selectedItem == item.name) {
                    return (
                      <div key={subItems.name}>
                        <img src={"src/cats/0/" + item.folder + "/icons/" + subItems.id + ".png"}></img>
                        <li onClick={() => this.setSelectedSubItem(subItems.name, subItems.id)}>{subItems.name}</li>
                        <div className="color-wrapper">
                          {subItems.name == this.state.selectedSubItem[0] ? <ColorButton selectedSubItemId={this.state.selectedSubItem[1]} categoryArr={this.props.categoryArr} categoryName={item.name} updateData={this.props.updateData} pallete={this.props.Kns.palette} palId={item.palette} folder={item.folder} /> : ''}
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>)
        }
        )
        }
      </div >
    )
  };
}

