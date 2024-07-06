import Menu from '@/components/shared/menu'
import Profile from '@/components/shared/profile'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
	return (
		<>
			<div className='border-r pt-20 min-h-[150vh]'>
				<Profile />

				<Button
					className='mb-5 px-12 py-3 mx-2'
					variant={'outline'}
					size={'lg'}
				>
					Снять с баланса
				</Button>

				<Menu />
			</div>
		</>
	)
}

export default Sidebar
