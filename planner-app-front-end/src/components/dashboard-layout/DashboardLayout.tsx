import { PropsWithChildren } from 'react'

import { DashboardHeader } from './dashboard-header/DashboardHeader'
import { DashboardSidebar } from './dashboard-sidebar/DashboardSidebar'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			{/* change width DashboardSidebar or hide it */}
			<DashboardSidebar />

			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				<DashboardHeader />
				{children}
			</main>
		</div>
	)
}
