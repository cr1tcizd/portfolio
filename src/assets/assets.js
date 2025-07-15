// Resume
import resume from './Елисеев Дмитрий.pdf'

// Png
import avatarPng from './avatar.png'
import generalPng from './generalPhone.png'
import todolistPng from './todolist/todolist.png'
import chatAppPng from './chat-app/chatApp.png'
import onlineStorePng from './online-store/onlineStore.png'
import onlineStoreAuthorization from './online-store/authorization.png'
import erpAppPng from './erp-app/erp-app.png'

// SVG Icon
import downArrow from './downArrow.svg?react'
import linkSvg from './link.svg?react'
import websiteSvg from './icons/website.svg?react'
// import githubSvg from './icons/github.svg?react'

// Tech stack
import htmlSvg from './html5.svg?react'
import cssSvg from './css3.svg?react'
import jsSvg from './js.svg?react'
import typescriptSvg from './typescript.svg?react'
import tailwindSvg from './tailwindcss.svg?react'
import npmSvg from './npm.svg?react'
import sassSvg from './sass.svg?react'
import reduxSvg from './redux.svg?react'
import reactSvg from './react.svg?react'
import nextjsSvg from './nextjs.svg?react'

// Social
import telegramSvg from './social/telegram.svg?react'
import vkSvg from './social/vk.svg?react'
import googleSvg from './social/google.svg?react'
import githubSvg from './social/github.svg?react'

export const assets = {
	avatarPng,
	htmlSvg,
	cssSvg,
	jsSvg,
	typescriptSvg,
	tailwindSvg,
	npmSvg,
	sassSvg,
	reduxSvg,
	telegramSvg,
	vkSvg,
	googleSvg,
	githubSvg,
	generalPng,
	todolistPng,
	downArrow,
	resume,
	chatAppPng,
	linkSvg,
	onlineStoreAuthorization,
	websiteSvg,
	nextjsSvg,
	erpAppPng,
}

export const skills = [
	{
		photo: jsSvg,
		name: 'JavaScript',
	},
	{
		photo: typescriptSvg,
		name: 'TypeScript',
	},
	{
		photo: htmlSvg,
		name: 'HTML 5',
	},
	{
		photo: cssSvg,
		name: 'CSS',
	},
	{
		photo: sassSvg,
		name: 'Sass',
	},
	{
		photo: tailwindSvg,
		name: 'Tailwind',
	},
	{
		photo: reactSvg,
		name: 'React',
	},
	{
		photo: reduxSvg,
		name: 'Redux',
	},
	{
		photo: nextjsSvg,
		name: 'NextJS',
	},
]

export const works = [
	{
		photo: [erpAppPng],
		name: 'Сервис управления сотрудниками',
		descr:
			'Мобильное PWA приложение для управление сотрудниками и их табелями учёта времени.',
		skills: [
			{ name: 'TypeScript' },
			{ name: 'React' },
			{ name: 'NextJS' },
			{ name: 'SCSS' },
		],
		href: 'https://github.com/cr1tcizd/hr-erp-app',
		website: 'https://dev.shuvi.keenetic.link',
	},
	{
		photo: [todolistPng],
		name: 'Todo List клон Google Keeps',
		descr: 'Создание, удаление и редактирование разметок.',
		skills: skills.filter(
			item =>
				item.name === 'JavaScript' ||
				item.name === 'CSS' ||
				item.name === 'React'
		),
		href: 'https://github.com/cr1tcizd/todo-list',
		website: 'https://cr1tcizd.github.io/todo-list',
	},
	{
		photo: [chatAppPng],
		name: 'Чат приложение',
		descr: 'Приложение обмена мгновенными сообщениями.',
		skills: skills.filter(
			item =>
				item.name === 'JavaScript' ||
				item.name === 'Sass' ||
				item.name === 'React'
		),
		href: 'https://github.com/cr1tcizd/chat-app',
	},
	{
		photo: [onlineStorePng, onlineStoreAuthorization],
		name: 'Онлайн магазин',
		descr:
			'Онлайн магазин с собственной базой данных. Реализована регистрация и логин, фильтрация по типу и бренду устройств.',
		skills: skills.filter(
			item =>
				item.name === 'TypeScript' ||
				item.name === 'Tailwind' ||
				item.name === 'React'
		),
		href: 'https://github.com/cr1tcizd/online-store',
	},
]
