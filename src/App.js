import React from "react";
import Header from "./components/Header";
import UpperContent from "./components/UpperContent";
import Card from "./components/Card";
import Footer from "./components/Footer";
import appData from "./AppData"

function App() {
  const appElements = appData.map((item) => {
    return <Card
      key={item.id}
      item={item} />
  });

  return (
    <div className="container">
      <Header />
      <UpperContent />
      <div className="cards">
        {appElements}
      </div>
      <Footer />
    </div>
  )
}

export default App;