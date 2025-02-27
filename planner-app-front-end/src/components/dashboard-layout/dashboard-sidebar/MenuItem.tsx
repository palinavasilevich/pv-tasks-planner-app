import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export const MenuItem = ({
	item: { name, link, icon: Icon }
}: {
	item: IMenuItem
}) => {
	return (
		<div>
			<Link
				href={link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg'
			>
				<Icon />
				<span>{name}</span>
			</Link>
		</div>
	)
}
