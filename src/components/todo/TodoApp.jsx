
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import FooterComponent from './FooterComponent'
import AuthProvider from './security/AuthContext'

export default function TodoApp() {
  return (
      <div className="TodoApp">
        <AuthProvider>
          <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path='/' element={ <LoginComponent /> }></Route>
                <Route path='/login' element={ <LoginComponent /> }></Route>
                <Route path='/welcome/:username' element={<WelcomeComponent /> }></Route>
                <Route path='/todos' element={<ListTodosComponent /> } />
                <Route path='/logout' element={<LogoutComponent /> } />
                <Route path='*' element={<ErrorComponent /> }></Route>
            </Routes>
            <FooterComponent />
          </BrowserRouter>
        </AuthProvider>
      </div>
  )
}
