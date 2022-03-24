import {Routes, Route} from 'react-router-dom'
import {GlobalStyles} from './styles/GlobalStyles'
import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import {DashboardPanel, AllProductsPanel, AddProductPanel, EditProductPanel} from 'components/panels'

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path="dashboard" element={<DashBoardPage/>}>
          <Route index element={<DashboardPanel title="Dashboard"/>}/>
          <Route path="all" element={<AllProductsPanel title="View All Products"/>}/>
          <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
          <Route path="edit" element={<EditProductPanel title="Edit New Product"/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App;