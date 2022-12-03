import pets from './images/pets.png';
import './App.css';

const imageDimensions = {
  width: '360px',
  height: 'auto'
}

const center = {
  width: '100vw',
  minHeight: 'minHeight',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#778899'
}

const card = {
  minHeight: '350px',
  width: '400px',
  backgroundColor: '#eee',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flexStart',
  padding: '20px',
  boxSizing: 'borderBox'
}

function App() {
  return (
    <div style={center}>
    <div style={card}>
      <h1>Agustin Gutierrez</h1>
      <p>Hi my name is as listed above. I initially started college as a nursing major but somehow ended up in my junior year of MAS web develpment. I have a lot of things that I like but I love my animals to death while being allergic to all of them. I have 3 dogs and 5 cats that are all the cutest babies in the whole entire planet.  </p>
      <img src={pets} style={imageDimensions} alt="Good boys and girls" />
    </div>
    </div>
    
  );
}

export default App;
