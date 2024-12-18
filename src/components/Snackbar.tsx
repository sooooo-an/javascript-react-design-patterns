import { useSnackbar } from '../contexts/SnackbarContext'
import FailIcon from './icons/FailIcon'
import SuccessIcon from './icons/SuccessIcon'

export default function Snackbar() {
  const { isShow, message, type } = useSnackbar()

  if (!isShow) return null

  return (
    <div
      className={`fixed left-1/2 top-20 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-stone-800 px-10 py-2 text-white shadow-2xl`}
    >
      {type === 'success' ? <SuccessIcon /> : <FailIcon />}
      {message}
    </div>
  )
}
