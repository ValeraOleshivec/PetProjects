import Header from './Header.jsx'
import {Outlet, useNavigation} from 'react-router'
import Loader from './Loader.jsx'
import CartOverview from '../features/cart/CartOverview.jsx'

const AppLayouts = () => {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {loading && <Loader />}
      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  )
}

export default AppLayouts
