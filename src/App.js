import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store from "./app/store"
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouter />
      </Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
