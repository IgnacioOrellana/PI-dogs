import './App.css';
import { Route, Switch } from 'react-router-dom';
import BreedDetail  from './componentes/Cards/breedDetail.jsx';
import Landing from './componentes/Landing/landing.jsx';
import BreedCreate from './componentes/Cards/breedCreate.jsx';
import Home from './componentes/Home/home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home/:id" component={BreedDetail} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={BreedCreate} />
      </Switch>
    </div>
  );
}

export default App;
