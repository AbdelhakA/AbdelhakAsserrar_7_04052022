import React from 'react'
import Content from '../Components/Content';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div className="container">
      <Header />
        <div className="toolbar"></div>
        <main className="main">
          <Content/>
        </main>
    </div>
  )
}

export default Home