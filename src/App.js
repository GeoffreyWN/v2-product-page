import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./utils/ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";
import TopBar from "./TopBar";


class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false
  }

  render() {
    return (
      <div>
        <TopBar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSection} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} />
          </div>


        </div>
      </div>
    );
  }
}

export default App;
