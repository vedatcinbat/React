import './App.css'
import CounterWithRedux from './components/Advanced/CounterWithRedux'
import CounterWithThunk from './components/Advanced/CounterWithThunk'
import ExpensiveComponent from './components/Advanced/ExpensiveComponent'
import GenericComponent from './components/Advanced/GenericComponent'
import ParentComponent from './components/Advanced/ParentComponent'
import LoginForm from './components/MaterialComponents/LoginForm'
/* import ClickableButton from './components/Basics/ClickableButton'
import Counter from './components/Basics/Counter'
import Greeting from './components/Basics/Greeting'
import HelloWorld from './components/Basics/HelloWorld'
import InputField from './components/Basics/InputField'
import ItemList from './components/Basics/ItemList'
import ToggleMessage from './components/Basics/ToggleMessage' 
import AdvancedCounter from './components/Intermediate/AdvancedCounter'
import DataDisplayWithLoading from './components/Intermediate/DataDisplayWithLoading'
import DataFetcher from './components/Intermediate/DataFetcher'
import FormikLoginForm from './components/Intermediate/FormikLoginForm'
import LoginForm from './components/Intermediate/LoginForm'
import MouseTracker from './components/Intermediate/MouseTracker'*/

// Routing
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User'; */

const App: React.FC = () => {

  return (
    <>
      {/* 
      <h2>Beginner</h2>
      <HelloWorld />
      <Greeting name='Vedat Cinbat' />
      <Counter />
      <ClickableButton />
      <InputField />
      <hr />
      <ToggleMessage />
      <hr />
      <ItemList /> */}
      {/* <DataFetcher />
      <AdvancedCounter />
      <LoginForm />
      <FormikLoginForm />
      <DataDisplayWithLoading isLoading={false} data='Hello, World!' />
      <MouseTracker render={({ x, y }) => <p>Mouse Position: {x}, {y}</p>} /> 

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Router>

      <GenericComponent />
      <CounterWithRedux />
      <CounterWithThunk />
      {/* <ExpensiveComponent value={12} /> 
      <ParentComponent />*/}

      <LoginForm />
    </>
  )
}

export default App
