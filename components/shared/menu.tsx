'use client'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
	const pathname = usePathname()

	return (
		<>
			{navLinks.map(nav => (
				<Link
					href={`/${nav.route}`}
					key={nav.route}
					className={cn(
						'flex h-9 cursor-pointer items-center gap-2 px-4 transition-colors hover:bg-blue-400/20 mix-blend-multiply',
						pathname === `/${nav.route}` && 'active'
					)}
				>
					<nav.icon className='size-4' />
					<span>{nav.name}</span>
				</Link>
			))}
		</>
	)
}

export default Menu
