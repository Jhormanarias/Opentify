import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import './App.css';
import Inicio from './components/pages/Inicio';
import Navbar from './components/navigation/Navbar';
import Buscar from './components/pages/Buscar';
import Favoritos from './components/pages/Favoritos';
import Footer from './components/microcomponents/Footer';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/buscar' exact component={Buscar} />
          <Route path='/favoritos' exact component={Favoritos} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
