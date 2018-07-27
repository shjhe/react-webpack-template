import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import VisibleTodoList from './views/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App