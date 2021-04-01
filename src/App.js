import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./utils/ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import TopBar from "./TopBar";


class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
    showHeartBeatSection: false
  }


  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    // console.log(updatedPreviewImage)
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureItemClick = (pos) => {
    // let updatedState = false;
    // if (pos === 1) {
    //   updatedState = true;
    // }
    this.setState({currentSelectedFeature: pos})
  }

  render() {
    return (
      <div>
        <TopBar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature}  />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>


        </div>
      </div>
    );
  }
}

export default App;
