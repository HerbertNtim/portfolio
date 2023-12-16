import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import { About, Contact, Home, Projects } from "./pages"
import NotFound from "./components/NotFound"

const App = () => {
  const isPageNotFound = false
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <BrowserRouter>
        {isPageNotFound ? <Navbar /> : ''}

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App