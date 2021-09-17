import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

import './App.css'
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height='100vh'
      projectID='da3d72f9-da2b-498b-acf2-537b7acd4818'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
