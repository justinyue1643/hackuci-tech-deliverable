import Petr from '../images/petr.png'
import './PetrAnimation.css';

const PetrAnimation = () => {
    return (
        <div className = "petr">
            <img className = "petr-img" src = {Petr} alt = "Petr"/>
        </div>
    );
}

export default PetrAnimation;