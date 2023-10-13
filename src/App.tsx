import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateProfilePage, HomePage, ProfilePage } from './pages'
import { CustomHeader } from './components'





function App() {

  return (
    <>
      <BrowserRouter>

        <CustomHeader />

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/profiles' element={<ProfilePage />} />
            <Route path='/create-profile' element={<CreateProfilePage />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
