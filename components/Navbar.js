function Navbar({}) {
	return (
		<nav className='container mx-auto flex items-center justify-between border-b-2 h-16 px-4'>
			<h1 className='uppercase text-xl tracking-wide font-semibold'>Memory Lane</h1>
			<ul className='flex'>
				<li>
					<button className='px-4 py-2 bg-blue-500 rounded text-white mr-4 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-700'>
						Log in
					</button>
				</li>
				<li>
					<button className='px-4 py-2 bg-red-500 rounded text-white hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-1 focus:ring-red-700'>
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
