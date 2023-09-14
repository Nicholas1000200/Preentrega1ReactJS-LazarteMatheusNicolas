import './App.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
      <body>
        <Navbar/>
        <ItemListContainer greetings="Esto es un E-Commerce sobre Star Wars" style={{fontWeight: 'bold'}}/>
      </body>
  )
}

export default App;
