import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Route } from 'react-router'
import './App.css'

const WordA = () => (
  <p>
    <Link to="/words/a/aardvark">aardvark</Link>
    <Link to="/words/a/apple">apple</Link>
    <Link to="/words/a/apparatus">apparatus</Link>
  </p>
)
const WordB = () => <p>banana banal buffalo</p>
const WordC = () => <p>cold caper country</p>

const WordView = ({ match }) => <p>Your word is: {match.params.word}. <Link to="/words/a">Go back</Link></p>

const WordsNavigation = () => {
  const links = [
    // should we set `exact` or not?
    // the question to ask is:
    // "If I am at /words/a/aardvark", do I want the "/words/a" link to show as active?
    // I'd say yes, but it is going to be case sensitive.
    { to: '/words/a', text: 'A words' },
    { to: '/words/b', text: 'B words', exact: true },
    { to: '/words/c', text: 'C words', exact: true },
  ]
  return (
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <NavLink
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

const Words = () => (
  <div>
    <WordsNavigation />
    <Route exact path="/words/a" component={WordA} />
    <Route path="/words/a/:word" component={WordView} />
    <Route exact path="/words/b" component={WordB} />
    <Route exact path="/words/c" component={WordC} />
    <Route
      exact
      path="/words"
      render={() => (
        <p>
          /words but not /words/something. (This area is a bit awkward. What
          should we put here?)
        </p>
      )}
    />
  </div>
)

const activeStyle = {
  fontWeight: 'bold',
  color: 'blue',
  zoom: 1.75,
}

export default Words
