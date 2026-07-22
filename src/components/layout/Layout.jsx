import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollProgress from '../common/ScrollProgress'
import MeshBackground from '../common/MeshBackground'
import NeelamLoader from '../common/NeelamLoader'

/**
 * Public site shell: scroll bar + grain + navbar + outlet + footer.
 *
 * The page uses a pure-CSS fade-in (keyed by pathname). Unlike a JS/opacity
 * animation, a CSS keyframe can never leave the page stuck at opacity:0 — the
 * element's resting state is always fully visible, so pages never go blank.
 */
export default function Layout() {
  const location = useLocation()

  return (
    <div className="grain relative flex min-h-screen flex-col text-white">
      <NeelamLoader />
      <MeshBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-fade">
          <Outlet />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
