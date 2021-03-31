import classes from "./App.module.css";
import ProductData from "./utils/ProductData";
import ProductPreview from "./ProductPreview";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <div>
      <header>
        <nav className={classes.Topbar}>
          <img
            src="https://i.dlpng.com/static/png/197684_preview.png"
            className="App-logo"
            alt="logo"
          />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails/>
        </div>

        
      </div>
    </div>
  );
}

export default App;
