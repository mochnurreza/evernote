import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Home from './Components/home/Home'
import Favorite from './Components/note/Favorite'
import NoteDetail from './Components/note/NoteDetail'
import EditForm from './Components/note/EditForm'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/favorites' component={Favorite}/>
        <Route path='/note/:id' component={NoteDetail}/>
        <Route path='/editform/:id' component={EditForm}/>
      </Switch>
    </Router>
  );
}

export default App;
