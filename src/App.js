import MainPage from "./components/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/news/:id" element={<News />}/>
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
