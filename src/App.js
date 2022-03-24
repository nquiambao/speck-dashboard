import {Routes, Route} from 'react-router-dom'
import {GlobalStyles} from './styles/GlobalStyles'
import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import {AllProductsPanel, AddProductPanel} from 'components/panels'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}>
          <Route index element={<AllProductsPanel title="View All Products"/>}/>
          <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App;