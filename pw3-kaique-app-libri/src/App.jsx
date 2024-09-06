import './App.css'
import NavBar from './Components/layout/NavBar'
import Container from './Components/layout/Container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
        <Route path='/' element = {<NavBar/>}>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='/listBook' element ={<ListBoks/>} ></Route>
        <Route path= '/createBook' element ={<CreateBooks/>} ></Route>
        </Route>
      </Routes>
      
     </Container>
     </BrowserRouter>
    
    </>
  )
}

export default App