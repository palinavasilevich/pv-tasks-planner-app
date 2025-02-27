import { useMutation, useQueryClient } from '@tanstack/react-query'

import { pomodoroService } from '@/services/pomodoro.service'

export function useDeleteSession(onDeleteSuccess: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteSession, isPending: isDeleteSessionPending } =
		useMutation({
			mutationKey: ['create new session'],
			mutationFn: (id: string) => pomodoroService.deleteSession(id),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['get today session']
				})

				onDeleteSuccess()

				// setSecondsLeft(workInterval * 60)
			}
		})

	return { deleteSession, isDeleteSessionPending }
}
