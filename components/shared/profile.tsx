import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { FaAngleDown } from 'react-icons/fa6'

const Profile = () => {
	return (
		<>
			<div className='flex items-center gap-x-2 mb-4'>
				<div className='rounded-full bg-secondary p-1'>
					<Avatar className='size-10 '>
						<AvatarImage src={'/profile.png'} />
					</Avatar>
				</div>

				<div className='space-y-1'>
					<span className='profile flex gap-2'>
						Shaxriyor Oripov <FaAngleDown />
					</span>
					<p className='profile-p'>Balance: 12 034.00 so’m</p>
				</div>
			</div>
		</>
	)
}

export default Profile
