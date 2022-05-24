import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Question } from "./Components/Question"
import { Result } from "./Components/Result"
import { Start } from "./Components/Stat"
import store from "./state/store"


function App() {

  let questionArray = store.questions.map((elem) => 
    <Question
      questionNumber={elem.questionNumber}
      question={elem.question}
      var1={elem.var1}
      var2={elem.var2}
      var3={elem.var3}
      value1={elem.value1}
      value2={elem.value2}
      value3={elem.value3}
      path={elem.path}
      link={elem.link}
      next={elem.next}
    />
  )

  return (
    <BrowserRouter>
    <div className="container">
      <h1 className="test-title">Информационная безопасность </h1>
      <Route exact path='/'><Start /></Route>
      {questionArray}
      <Route exact path="/result"><Result /></Route>
    </div>
    </BrowserRouter>
  )
}

export default App;
