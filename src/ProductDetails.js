import React from 'react'
import classes from './ProductDetails.module.css'
import ProductData from './utils/ProductData'

const ProductDetails = () => {
    return (
        
            <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
          <p className={classes.ProductDesc}>{ProductData.description}</p>
          <h3 className={classes.SectionHeading}> Select Color</h3>
          <div>
            <img
              src="https://imgur.com/xSIK4M8.png"
              alt=""
              className={[
                classes.ProductImage,
                classes.SelectedProductImage,
              ].join(" ")}
            />
          </div>

          <h3 className={classes.SectionHeading}> Features</h3>
          <div>
            <button
              className={[
                classes.FeatureItem,
                classes.SelectedFeatureItem,
              ].join(" ")}
            >
              Time
            </button>
            <button className={classes.FeatureItem}>Heart Rate</button>
          </div>
          <button className={classes.PrimaryButton}>buy Now</button>
        </div>
    )
}

export default ProductDetails
