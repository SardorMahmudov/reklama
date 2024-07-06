import { Home } from 'lucide-react'
import { CgProfile } from 'react-icons/cg'
import { FiUser } from 'react-icons/fi'
import { GrLineChart } from 'react-icons/gr'
import { IoIosLogOut } from 'react-icons/io'
import { IoCardOutline } from 'react-icons/io5'
import { MdManageAccounts, MdOutlineModeEditOutline } from 'react-icons/md'

export const navLinks = [
	{ route: '', name: 'Bosh sahifa', icon: Home },
	{ route: '', name: 'SMM Menedjerlar', icon: MdManageAccounts },
	{ route: 'profile', name: 'Profilim', icon: FiUser },
]

export const footerList = [
	{ route: '', name: 'Help' },
	{ route: '', name: 'Setting' },
	{ route: '', name: 'Support' },
]

export const menuList = [
	{ route: '', name: 'My statistics', icon: GrLineChart },
	{ route: '', name: 'Profile edit', icon: MdOutlineModeEditOutline },
	{ route: '', name: 'Card', icon: IoCardOutline },
	{ route: '', name: 'Log out', icon: IoIosLogOut },
]

export const hashesList = [
	{ route: '', name: '✒️ dizayn' },
	{ route: '', name: '👕 futbolkalar' },
	{ route: '', name: '👕 futbolkalar' },
	{ route: '', name: '👖 shim' },
	{ route: '', name: '👕 futbolkalar' },
	{ route: '', name: '✒️ dizayn' },
	{ route: '', name: '👖 shim' },
]
