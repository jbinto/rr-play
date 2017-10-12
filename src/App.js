import React, { Component } from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css'

const Home = () => <p>Home</p>
const PageOne = () => <p>One OneOneOneOneOneOneOneOneOne</p>
const PageTwo = () => <p>Two TwoTwoTwoTwoTwoTwoTwoTwoTwo</p>
const PageThree = () => (
  <p>Three ThreeThreeThreeThreeThreeThreeThreeThreeThree</p>
)

const activeStyle = {
  fontWeight: 'bold',
  color: 'red',
}

const Navigation = () => {
  const links = [
    { to: '/', text: 'Home', exact: true },
    { to: '/page1', text: 'Page One' },
    { to: '/page2', text: 'Page Two' },
    { to: '/page3', text: 'Page Three' },
  ]
  return (
    <ul>
      {links.map(link => (
        <li>
          <NavLink
            key={link.to}
            activeStyle={activeStyle}
            to={link.to}
            exact={link.exact}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/page1" component={PageOne} />
      <Route path="/page2" component={PageTwo} />
      <Route path="/page3" component={PageThree} />
    </div>
  </BrowserRouter>
)

export default App
