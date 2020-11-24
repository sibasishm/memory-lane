import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<header>
				<Navbar />
			</header>
			<main className='py-24 text-center'>
				<h1 className='text-3xl leading-loose'>
					Let's take a trip down your
					<br />
					<span className='text-7xl tracking-wider font-bold'>Memory Lane</span>
				</h1>
				<button className='mt-6 px-4 py-2 bg-blue-500 rounded text-white mr-4 hover:shadow-lg focus:shadow-lg focus:outline-none'>
					Show me how
				</button>
			</main>
			<footer className='mt-4 border-t-2 py-12 flex flex-col justify-center items-center bg-gray-100'>
				<p>Powered by</p>
				<img src='/vercel.svg' alt='Vercel Logo' className='mt-2 h-6' />
			</footer>
		</>
	);
}
