import { Separator } from '@/components/ui/separator'
import React from 'react'

const Dashboard = () => {
	return (
		<div className='mt-10 container'>
			<form className='space-y-3'>
				<div className='grid grid-cols-2 gap-2'>
					<div>
						<p className='profile-p'>Name:</p>

						<h2 className='profile py-3'>Shaxriyor Oripov</h2>
						<Separator className='seperator' />
					</div>

					<div>
						<p className='profile-p'>Phone number:</p>

						<h2 className='profile py-3'>+998 90 002 41 72</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>Age:</p>

						<h2 className='profile py-3'>15</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>Password:</p>

						<h2 className='profile py-3'>**************</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>Location:</p>

						<h2 className='profile py-3'>Uzbekistan, Tashkent, Yunusobod</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>New password:</p>

						<h2 className='profile py-3'>249883858</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>Soha:</p>

						<h2 className='profile py-3'>Qurilish</h2>
						<Separator />
					</div>

					<div>
						<p className='profile-p'>Ichki yo’nalish</p>

						<h2 className='profile py-3'>Architektura</h2>
						<Separator />
					</div>
				</div>
				<p className='warning'>
					Xurmatli foydalanuvchi akkaunt ma’lumitlariga kiritilgan
					o’zgartirishlar 24 soat ichida tasdiqlanadi
				</p>
			</form>
		</div>
	)
}

export default Dashboard
