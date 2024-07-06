import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-40 h-14 bg-background/70 backdrop-blur-xl'>
			<div className=' container mx-auto flex h-full max-w-8xl items-center justify-between border-b-2 '>
				<Link href={'/'} className='flex items-center gap-2'>
					<Image src={'/logo.svg'} alt='logo' width={32} height={32} />
					<h1 className='font-space-grotesk text-2xl font-extrabold'>onest</h1>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
