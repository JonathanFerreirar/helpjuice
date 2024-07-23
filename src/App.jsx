import { Header } from './components/header/header'
import { TopBar } from './components/top-bar/top-bar'
import { Wrapper } from './components/wrapper/wrapper'

function App() {
  return (
    <Wrapper>
      <Header />
      <Wrapper size="sm" className="mt-10">
        <TopBar />
        <div className="border-b border-gray-200 pb-4 mt-10">
          <h1 className="text-5xl font-bold text-gray-900">
            Front-end developer test project
          </h1>
        </div>
      </Wrapper>
    </Wrapper>
  )
}

export default App
