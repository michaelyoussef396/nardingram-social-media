import './globals.css'
import {Routes, Route} from 'react-router-dom'
import SigninForm from './_auth/forms/SignupForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from "./_root/RootLayout";

const app = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>
        {/* Private routes */}
        <Route element={<RootLayout />} />
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default app
