import Product from "./componets/Product";
import data from "./data";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
