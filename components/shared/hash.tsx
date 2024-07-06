import { hashesList } from '@/constants'
import React from 'react'

const Hash = () => {
	return (
		<div className='grid grid-cols-4 gap-2'>
			{hashesList.map(hash => (
				<div className={'flex gap-2'} key={hash.name}>
					<p className='flex-1'># {hash.name}</p>
				</div>
			))}
		</div>
	)
}

export default Hash
