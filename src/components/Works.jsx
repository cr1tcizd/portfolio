import { works } from '../assets/assets.js'
import WorksItemTwo from './WorkItemTwo.jsx'

const Works = () => {
	return (
		<section className='py-20 bg-white'>
			<div className='container flex flex-col items-center'>
				<h2 className='text-2xl mx-auto mb-[80px]'>Мои работы</h2>
				<div className='flex flex-wrap justify-center gap-4'>
					{works.map((work, index) => (
						<WorksItemTwo key={index} work={work} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Works
