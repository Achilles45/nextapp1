import Link from "next/link";
import navStyles from "/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={ navStyles.nav }>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/contact">Contact Us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar