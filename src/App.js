import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from "./Data"


export default function App() {
  const cards = Data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="cards-list">
              {cards}
          </section>
      </div>
  )
}



