import Head from 'next/head';
import Navbar from '../components/Navbar';
import MemoryCard from '../components/MemoryCard';
import { minifyRecords, table } from '../utils/airtable';

export default function Home({ memories, error }) {
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
				<button className='mt-6 px-4 py-2 bg-blue-500 rounded text-white mr-4 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700'>
					Show me how
				</button>
				{error ? (
					<h1>{error}</h1>
				) : (
					<ul className='container mx-auto my-4 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left'>
						{memories.map(({ id, fields }) => (
							<MemoryCard id={id} data={fields} />
						))}
					</ul>
				)}
			</main>
			<footer className='w-screen fixed bottom-0 mt-4 border-t-2 py-12 flex flex-col justify-center items-center bg-gray-100'>
				<p>Powered by</p>
				<img src='/vercel.svg' alt='Vercel Logo' className='mt-2 h-6' />
			</footer>
		</>
	);
}

export async function getServerSideProps(context) {
	try {
		const records = await table.select({}).firstPage();

		return {
			props: {
				memories: minifyRecords(records),
			},
		};
	} catch (err) {
		return {
			props: {
				error: 'Something went wrong!',
			},
		};
	}
}
