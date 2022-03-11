import {Routes, Route} from 'react-router-dom'
import {GlobalStyles} from './styles/GlobalStyles'
import {LoginPage, DashBoardPage, PageNotFound} from './pages'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App;