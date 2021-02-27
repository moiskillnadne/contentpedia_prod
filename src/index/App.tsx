import './App.css'
import React from 'react'
import { Switch, Route, Router, useLocation } from 'react-router-dom'

import history from '@/index/history'

// Pages
import MainPage from '@/pages/main'
import ProfilePage from '@/pages/profile'
import FavoritesPage from '@/pages/favorite'
import SettingsPage from '@/pages/settings'
import AboutPage from '@/pages/about'
import ReleasePage from '@/pages/release'
import SupportPage from '@/pages/support'

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Navigation />
    </Router>
  )
}

function Navigation(): JSX.Element {
  const location = useLocation()
  return (
    <div className="App">
      <Switch location={location}>
        <Route exact path="/" component={MainPage} />

        <Route path="/profile" component={ProfilePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/settings" component={SettingsPage} />

        <Route path="/about" component={AboutPage} />
        <Route path="/release" component={ReleasePage} />
        <Route path="/support" component={SupportPage} />
      </Switch>
    </div>
  )
}

export default App
