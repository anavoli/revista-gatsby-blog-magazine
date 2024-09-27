import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Početna
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          O nama
        </Link>
      </li>
      <li>
        <Link to="/categories" className="page-link">
          Kategorije
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
         
        </Link>
      </li>
    </ul>
  )
}

export default Links
