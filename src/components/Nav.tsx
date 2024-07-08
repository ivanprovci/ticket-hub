import Link from "next/link"

const Nav = () => {
	return (
		<nav className="h-16 bg-cyan-400">
			<h1>nav bar</h1>
			<Link href="/events">Events</Link>
		</nav>
	)
}

export default Nav
