import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Dummy from './components/Dummy'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr/>
    <Dummy/>
  </div>
)

export default App