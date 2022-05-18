import Header from 'components/Header'
import Questions from 'components/Questions'
import CreateQuestions from 'components/CreateQuestions'

const App = () => {
  return (
    <div>
      <Header>Q & A Application</Header>
      <main>
        <Questions />
        <CreateQuestions />
      </main>
    </div>
  )
}

export default App
