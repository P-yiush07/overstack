import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ClerkProvider} from '@clerk/clerk-react'
import Navbar from './components/Navbar';
 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
    const navigate = useNavigate();
    const location = useLocation();
  
    // Conditionally render the Navbar based on the current route
    const renderNavbar = location.pathname !== '/register';
  
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
     {renderNavbar && <Navbar />}
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}