import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { LoginIcon} from '@/components/icons';

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="bg-background flex justify-between m-2">
        <Link to="/">
          <h1>pictureU</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login" className='text-foreground'>
              <LoginIcon />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar