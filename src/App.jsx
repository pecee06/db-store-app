import dbService from "./services/db.service"
import { useState, useEffect } from "react"
import Card from "./components/Card"

const App = () => {
  const [quiz, setQuiz] = useState([])

  useEffect(()=>{
    dbService.fetchAll({
      collectionName: "Quiz"
    }).then(data => {
      setQuiz(data)
    })
  },[quiz])

  return (
    <main className="bg-slate-900 min-h-screen py-4 flex flex-col items-center gap-5">
      {
        quiz.length!=0 ?
        quiz.map((quizObj, index)=>(
          <Card key={index} quizObj={quizObj} />
        ))
        :
        <p className="text-2xl text-white font-bold">No Questions Added</p>
      }
    </main>
  )
}

export default App