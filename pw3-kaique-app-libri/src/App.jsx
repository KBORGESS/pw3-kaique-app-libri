import './App.css'
import NavBar from './Components/layout/NavBar'
import Container from './Components/layout/Container'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import CreateBooks from './Components/pages/CreateBooks'
import ListBoks from './Components/pages/ListBooks'

function App() {

  return (
    <>
     {/*estrutura de navegação*/}
     <BrowserRouter>
     <Container>
      
      <Routes>
        <Route path='/' element = {<NavBar/>}></Route>
        <Route path='/' element ={<Home/>}></Route>
        <Route path= '/CreateBooks' element ={<CreateBooks/>} ></Route>
        <Route path='/ListBooks' element ={<ListBoks/>} ></Route>
      </Routes>
      
     </Container>
     </BrowserRouter>
    
    </>
  )
}

export default App