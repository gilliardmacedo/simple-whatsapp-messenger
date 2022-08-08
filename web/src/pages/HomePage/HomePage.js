import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div>
        <Link to={routes.newMessage()} className="rw-link">
          {'New message'}
        </Link>
      </div>
      <div>
        <Link to={routes.messages()} className="rw-link">
          {'List messages'}
        </Link>
      </div>
    </>
  )
}

export default HomePage
