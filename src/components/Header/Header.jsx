import reactCoreImg from '../../assets/react-core-concepts.png';
import './Header.module.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

export default function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactCoreImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
