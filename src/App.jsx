import Profile from "./components/Profile/Profile.jsx"
import userData from "./userData.json"
import FriendList from "./components/FriendList/FriendList.jsx"
import friends from "./friend.json"
import TransactionHistory  from "./components/TransactionHistory/TransactionHistory.jsx"
import transactions from "./transactions.json"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} stats={userData.stats} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  )
}

export default App
