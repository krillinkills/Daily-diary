import Nav from './Components/Nav';
import Write from './Components/Write';
import Space from './assets/space.jpg';

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${Space})` }}
      className="w-full h-screen"
    >
      <Nav />
      <Write />
    </div>
  );
}

export default App;
