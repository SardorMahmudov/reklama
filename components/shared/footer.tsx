import { footerList } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<>
			<div className='flex items-center gap-4 mb-2'>
				{footerList.map(list => (
					<Link
						href={`/${list.route}`}
						key={list.route}
						className={'cursor-pointer transition-color'}
					>
						<span>{list.name}</span>
					</Link>
				))}
			</div>
			<div className='flex items-center gap-4 profile-p'>
				<p>Privacy & Policy</p>
				<p>Copyright 2023</p>
			</div>
		</>
	)
}

export default Footer
