import { assets } from '../assets/assets'

const WorksItemTwo = ({ work }) => {
	return (
		<div className='flex flex-col relative w-[550px] rounded-[6px] shadow-[0px_0px_10px_2px_rgba(34,60,80,0.2)]'>
			<img className='rounded-t-[6px] h-[260px]' src={work.photo[0]} alt='' />
			<div className='flex flex-col px-8 gap-1 pb-6 pt-4 h-full'>
				<div className='text-neutral-800 py-[10px] text-[22px] font-bold'>
					{work.name}
				</div>
				<div className='leading-6 h-[48px] content-center'>{work.descr}</div>
				<div className='w-full h-[2px] bg-blue-500 my-[12px]'></div>
				<div className='text-[18px] font-bold mb-2'>Стек:</div>
				<div className='flex flex-col gap-2 mb-4'>
					{work.skills.map(
						(item, index) => (
							<div className='flex items-center gap-2' key={index}>
								<div className='h-[3px] w-[3px] rounded-full bg-[#1f1f1f]'></div>
								<div>{item.name}</div>
							</div>
						)
						// <image className="">{item.name}</image>
					)}
				</div>
				<div className='self-start mt-auto flex gap-2'>
					<a
						className='flex items-center gap-2 rounded-[4px] px-[18px] py-[12px] text-white font-bold  bg-[#383838] duration-200 hover:bg-opacity-90'
						href={work.href}
						target='_blank'
					>
						<assets.githubSvg className='h-[18px] w-[18px]' />
						Посмотреть код
					</a>
					{work?.website && (
						<a
							className='flex items-center gap-2 px-[18px] py-[12px] rounded-[4px] text-black font-bold  fill-black border-[2px] border-[#383838] border-solid  duration-200 hover:bg-[#ececec]'
							href={work.website}
							target='_blank'
						>
							<assets.websiteSvg className='h-[18px] w-[18px]' />
							Посмотреть вживую
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default WorksItemTwo
