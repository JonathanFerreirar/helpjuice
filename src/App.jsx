import { Header } from './components/header/header'
import { Button } from './primitive/button'

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>This is my button</Button>
    </>
  )
}

export default App
