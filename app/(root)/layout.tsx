import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'
import Footer from '@/components/shared/footer'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<div className='container-lg mx-auto grid min-h-full  grid-cols-4'>
				<div className='col-span-1'>
					<Sidebar />
					<Footer />
				</div>

				<main className='col-span-3'>{children}</main>
			</div>
		</div>
	)
}

export default Layout
