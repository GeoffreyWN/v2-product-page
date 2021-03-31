import React from "react";
import classes from "./ProductPreview.module.css";

const ProductPreview = ({ currentPreviewImage, showHeartBeatSection }) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={currentPreviewImage} alt="Product Preview" />

      { showHeartBeatSection ? (
        <div className={classes.HeartBeatSection}>
          <i class="fas fa-heartbeat"></i>
          <p>82</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>{`${currentHour}: ${currentMinute}`}</p>
        </div>
      )}



    </div>
  );
};

export default ProductPreview;
