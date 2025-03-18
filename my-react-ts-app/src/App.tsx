import './App.css'
import ClickableButton from './components/ClickableButton'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import HelloWorld from './components/HelloWorld'
import InputField from './components/InputField'
import ItemList from './components/ItemList'
import ToggleMessage from './components/ToggleMessage'

const App: React.FC = () => {

  return (
    <>
      <HelloWorld />
      <Greeting name='Vedat Cinbat' />
      <Counter />
      <ClickableButton />
      <InputField />
      <hr />
      <ToggleMessage />
      <hr />
      <ItemList />
    </>
  )
}

export default App
