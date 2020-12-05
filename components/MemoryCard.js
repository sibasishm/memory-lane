export default function MemoryCard({ data: { title, description } }) {
	return (
		<li className='bg-white shadow-md p-4 px-6 rounded border'>
			<h1 className='text-2xl font-semibold'>{title}</h1>
			<p className='mt-2 text-gray-600'>{description}</p>
		</li>
	);
}
