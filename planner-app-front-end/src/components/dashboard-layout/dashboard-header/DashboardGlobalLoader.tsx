'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '@/components/ui/Loader'

export function DashboardGlobalLoader() {
	const isMutation = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutation ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null
}
