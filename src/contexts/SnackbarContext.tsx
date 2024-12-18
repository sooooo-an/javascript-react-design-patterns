import { createContext, useContext, useEffect, useState } from 'react'

type SnackbarType = 'success' | 'fail'

type SnackbarContextType = {
  setSnackbar: (message: string, type: SnackbarType) => void
  message: string
  type: SnackbarType
  isShow: boolean
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, handleSnackbar] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<SnackbarType>('success')

  const setSnackbar = (message: string, type: SnackbarType) => {
    handleSnackbar(true)
    setMessage(message)
    setType(type)
  }

  const hideSnackbar = () => {
    handleSnackbar(false)
    setMessage('')
    setType('success')
  }

  useEffect(() => {
    if (!show) return

    const timeout = setTimeout(() => {
      hideSnackbar()
    }, 2000)

    return () => clearTimeout(timeout)
  }, [show])

  return (
    <SnackbarContext.Provider value={{ setSnackbar, message, type, isShow: show }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}
