import Header from 'components/Header'
import Questions from 'components/Questions'
import CreateQuestions from 'components/CreateQuestions'
import styles from 'components/styles.module.css'
import Toast from 'components/Toast'

const App = () => {
  return (
    <div>
      <Header>Q & A Application</Header>
      <main className={styles.main}>
        <Questions />
        <CreateQuestions />
      </main>
      <Toast />
    </div>
  )
}

export default App
