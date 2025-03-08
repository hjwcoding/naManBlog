import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer> 
      <Link to="/posts/new">Menu 1</Link>
      <Link to="/posts/new">Menu 2</Link>
      <Link to="/posts/new">Menu 3</Link>
    </footer>
  )
}