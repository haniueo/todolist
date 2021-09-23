import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="container">
      <div class="coloumns">
        <div class="coloumn is-half is-offset-one-quarter">
        <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
