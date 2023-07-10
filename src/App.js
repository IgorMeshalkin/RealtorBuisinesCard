import './App.css';
import GreetingsBlock from "./components/GreetingsBlock/GreetingsBlock";
import BenefitBlock from "./components/BenefitBlock/BenefitBlock";
import CallButton from "./components/CallButton/CallButton";
import ReviewsBlock from "./components/ReviewsBlock/ReviewsBlock";
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className="backgroundImage"/>
            <div className="backgroundShadow"/>
            <div className="scrollPlace">
                <GreetingsBlock/>
                <BenefitBlock/>
                <CallButton/>
                <ReviewsBlock/>
                <ServiceBlock/>
                <CallButton/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
