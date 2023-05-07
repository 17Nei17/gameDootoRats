import React from "react";
import { useEffect, useState, useRef } from "react";


export default class ColorButton extends React.Component {
    constructor(props) {
        super(props);
        this.currentCat = this.props.currentCat;
        this.folder = this.props.folder;
        this.selectedColor = "";
        this.state = { selectedColor: '' };
    }

    componentDidMount() {
        
   
    }

    selectImage(event, folder, id, categoryName) {
        this.props.updateData(categoryName, [folder, id, this.props.selectedSubItemId])
        event.target.classList.add("selected");
        this.setState({ selectedColor: id });

    }


    render() {
        return (
            this.props.pallete[this.props.palId ? this.props.palId : 0].colours && this.props.pallete[this.props.palId ? this.props.palId : 0].colours.map((item, index) => {
                if (item.shades) {
                    return item.shades && item.shades.map((shade, index) => {
                        return (
                            <div onClick={(event) => this.selectImage(event, this.props.folder, shade.id, this.props.categoryName)}
                                key={shade.id + index} data-id={shade.id} data-name={shade.name}
                                className={this.state.selectedColor === shade.id ? 'selected colorItem' : 'colorItem'}
                                style={{ backgroundColor: shade.colour, filter: 'brightness(' + shade.bright + ')' }}>
                            </div>
                        )
                    })
                }
                else {
                    return (
                        <div onClick={(event) => this.selectImage(event, this.props.folder, item.id, this.props.categoryName)}
                            key={item.id + index} data-id={item.id} data-name={item.name}
                            className={this.state.selectedColor === item.id ? 'selected colorItem' : 'colorItem'}
                            style={{ backgroundColor: item.colour, filter: 'brightness(' + item.bright + ')' }}>
                        </div>
                    )
                }
            })
        )
    };
}