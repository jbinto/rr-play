import React, { Component } from 'react'
import { NavLink, BrowserRouter, Link } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css'

import Words from './Words'

const Home = () => <p>Home</p>
// const Words = () => <p>aardvark banana caper</p>
const Numbers = () => <p>6 29 198</p>
const Pictures = () => (
  <p>
    <img src="https://i.imgur.com/UpspRs9.jpg" /> That is a picture of an{' '}
    <Link to="/words/a/aardvark">aardvark</Link>.
  </p>
)

const activeStyle = {
  fontWeight: 'bold',
  color: 'red',
}

const Navigation = () => (
  // https://reacttraining.com/react-router/web/api/Route/children-func
  // (!!!)
  <Route
    exact
    path="/"
    children={({ match }) => {
      if (match) {
        // e.g. we are at '/'
        return <PrimaryNav />
      }
      // e.g. we are on any other page than '/'
      return <MiniPrimaryNav />
    }}
  />
)

const PrimaryNav = () => {
  const links = [
    { to: '/', text: 'Home', exact: true },
    { to: '/words', text: 'Words' },
    { to: '/numbers', text: 'Numbers' },
    { to: '/pictures', text: 'Pictures' },
  ]
  return (
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <NavLink activeStyle={activeStyle} to={link.to} exact={link.exact}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const MiniPrimaryNav = () => {
  const links = [
    { to: '/', text: 'H🏡', exact: true },
    { to: '/words', text: 'W🔠' },
    { to: '/numbers', text: 'N🔢' },
    { to: '/pictures', text: 'P🖼' },
  ]
  return (
    <ul>
      {links.map(link => (
        <li className="mini">
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
      <Route path="/words" component={Words} />
      <Route path="/numbers" component={Numbers} />
      <Route path="/pictures" component={Pictures} />
    </div>
  </BrowserRouter>
)

export default App
