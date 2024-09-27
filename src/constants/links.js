import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About-o nama
        </Link>
      </li>
      <li>
        <Link to="/categories" className="page-link">
          kategorije
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact-nema
        </Link>
      </li>
    </ul>
  )
}

export default Links
