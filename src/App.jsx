import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./assets/data"


export default function App(){

  const travelData = data.map(item => {
    return (
      <Card 
        item = {item}
      />
    )
  })
  return (
    <section>
      <Header />
      <section className="cardList">
        {travelData}
      </section>
    </section>
    
  )
}
