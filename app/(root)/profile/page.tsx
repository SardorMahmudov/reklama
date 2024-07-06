import Hash from '@/components/shared/hash'
import { menuList } from '@/constants'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Dashboard from './_components/dashboard'

const Page = () => {
	return (
		<>
			{' '}
			<div className='mt-20 ml-5 border-2 min-h-[221px]  '>
				<div className='gird grid-cols-2 flex justify-around pt-4'>
					<div className='flex'>
						<div className='rounded-full p-1'>
							<Avatar className='size-2'>
								<AvatarImage src={'/phone.png'} />
							</Avatar>
						</div>

						<div className='items-center'>
							<h3 className='user-n'>Shaxiryor274</h3>
							<p className='profile opacity-30 text-lg font-medium'>User</p>
						</div>
					</div>

					<div className='flex gap-4'>
						{menuList.map(list => (
							<Link
								href={`/${list.route}`}
								key={list.route}
								className={cn(
									'flex items-center h-9 cursor-pointer gap-1 transition-colors hover:bg-blue-400/20 menu',
									'Profile edit' === `${list.name}` && 'active',
									'Log out' === `${list.name}` && 'active1'
								)}
							>
								<list.icon className='size-4' />
								<span>{list.name}</span>
							</Link>
						))}
					</div>
				</div>
				<div className='container w-[70%]'>
					<Hash />
				</div>
			</div>
			<Dashboard />
		</>
	)
}

export default Page
