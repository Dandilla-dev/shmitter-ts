import { useState } from 'react'

import './App.css'
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import {ShmitterContext} from "./utils/context.ts";
import type {Stats, User} from "./utils/types";


function App() {
  const [user, setUser]=useState<User> ({
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name:'Monster'
  })
  const [stats, setStats]=useState<Stats> ({
    followers: 100,
    following: 50
  })
  const changeAvatar = (url: string | null) => {

    setUser( prevState => ({...prevState, avatar: url || prevState.avatar}))
  }
    const changeName = (newName: string | null) => {

        setUser( prevState => ({...prevState, name: newName || prevState.name}))
    }

  return (
      <div className={'app'}>
        <ShmitterContext value={{
          user, changeAvatar, changeName, stats
        }}>
          <Navigation />
          <Body />
        </ShmitterContext>
      </div>
  )
}

export default App
