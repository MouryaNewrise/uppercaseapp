import './App.css';
import Navbar from './components/Navbar'
import ReactApp from './components/ReactApp'
import MyText from './components/MyText'

function App() {
    return (
        <div className="App">
            <Navbar about="About Us" contact="Contact Us" />
            <MyText heading="Enter the text to analyze" />
            <ReactApp />
        </div>
    );
}

export default App;