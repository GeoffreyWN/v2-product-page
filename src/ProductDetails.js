import React from 'react'
import classes from './ProductDetails.module.css'

const ProductDetails = ({ data, onColorOptionClick, currentPreviewImagePos, onFeatureItemClick, currentSelectedFeature }) => {

  const colorOptions = data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage]
    if (pos === currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage)
    }
    return (
      <img key={pos} src={item.imageUrl} alt={item.styleName} className={classArr.join(' ')} onClick={() => onColorOptionClick(pos)} />
    )
  })

  const featureList = data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem]
    if (pos === currentSelectedFeature) {
      classArr.push(classes.SelectedFeatureItem)
    }
    return (
      <button onClick={() => onFeatureItemClick(pos)} key={pos} className={classArr.join(" ")} > {item} </button>
    )
  })
  return (

    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{data.title}</h1>
      <p className={classes.ProductDesc}>{data.description}</p>
      <h3 className={classes.SectionHeading}> Select Color</h3>
      <div>
        {colorOptions}
      </div>

      <h3 className={classes.SectionHeading}> Features</h3>
      <div>
        {featureList}
      </div>
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  )
}

export default ProductDetails
