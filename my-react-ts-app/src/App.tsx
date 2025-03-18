import './App.css'
import AdvancedCounter from './components/Intermediate/AdvancedCounter'
/* import ClickableButton from './components/Basics/ClickableButton'
import Counter from './components/Basics/Counter'
import Greeting from './components/Basics/Greeting'
import HelloWorld from './components/Basics/HelloWorld'
import InputField from './components/Basics/InputField'
import ItemList from './components/Basics/ItemList'
import ToggleMessage from './components/Basics/ToggleMessage' */
import DataFetcher from './components/Intermediate/DataFetcher'

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
      <DataFetcher />
      <AdvancedCounter />
    </>
  )
}

export default App
