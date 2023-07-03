import './App.css';
import GreetingsBlock from "./components/GreetingsBlock/GreetingsBlock";
import BenefitBlock from "./components/BenefitBlock/BenefitBlock";

function App() {
    return (
        <>
            <div className="backgroundImage"/>
            <div className="backgroundShadow"/>
            <div className="scrollPlace">
                <GreetingsBlock/>
                <BenefitBlock/>
            </div>
        </>
    );
}

export default App;
