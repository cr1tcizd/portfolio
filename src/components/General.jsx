import { assets } from '../assets/assets.js'
import { useEffect, useRef, useState } from 'react'

const General = () => {
	const ref = useRef(null)
	const [value, setValue] = useState('')
	const textArr = 'FRONTEND DEVELOPER'

	useEffect(() => {
		let ids = []
		textArr.split('').forEach((item, index) => {
			const timeout = setTimeout(() => {
				setValue(value => value + item)
			}, 100 * index)
			ids.push(timeout)
		})
		return () => {
			ids.forEach(id => clearTimeout(id))
		}
	}, [])

	return (
		<section
			className='bg-[#1f1f1f] py-20 relative'
			ref={ref}
			style={{ height: window.innerHeight }}
		>
			<div className='container flex justify-center items-center gap-[25px] h-full'>
				<div className='flex flex-col items-center gap-7 text-white'>
					<h1 className='text-[48px] font-semibold'>Dmitriy Eliseev</h1>
					<h2 className='text-[28px]'>
						{value}
						<b className='animate-[bottomLine_0.7s_ease-in-out_infinite]'>_</b>
					</h2>
					<div className='flex gap-4'>
						<button className='py-[12px] w-[200px] border-[1px] border-transparent font-semibold rounded-[10px] bg-blue-500'>
							<a href='mailto:dmitriy.eliseev099@gmail.com'>Связь со мной</a>
						</button>
						<button className='py-[12px] w-[200px] border-[1px] border-white font-semibold rounded-[10px]'>
							<a href={assets.resume} download='Елисеев Дмитрий резюме'>
								Скачать резюме
							</a>
						</button>
					</div>
					<div className='flex gap-4'>
						<a href='https://t.me/kwimys'>
							<assets.telegramSvg className='w-[30px] h-[30px] opacity-35 hover:opacity-90 transition-opacity' />
						</a>
						<a href='https://github.com/cr1tcizd/'>
							<assets.githubSvg className='w-[30px] h-[30px] opacity-35 hover:opacity-90 transition-opacity' />
						</a>
					</div>
				</div>
			</div>
			<a href='#skills'>
				<assets.downArrow className='transition duration-500 animate-[downArrow_2s_ease-in-out_infinite] absolute w-[35px] rounded-full fill-neutral-50 p-1 bottom-[30px] left-0 right-0 mx-auto hover:fill-blue-300' />
			</a>
		</section>
	)
}

export default General
