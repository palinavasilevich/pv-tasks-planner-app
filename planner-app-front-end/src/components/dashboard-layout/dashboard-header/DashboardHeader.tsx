import { DashboardGlobalLoader } from './DashboardGlobalLoader'
import { DashboardProfile } from './dashboard-profile/DashboardProfile'

export function DashboardHeader() {
	return (
		<header>
			<DashboardGlobalLoader />
			<DashboardProfile />
		</header>
	)
}
