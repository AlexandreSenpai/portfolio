import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [themeProfile, setThemeProfile] = useState('dark')

  const toggleTheme = () => {
    const newThemeProfile = themeProfile === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newThemeProfile)
    setThemeProfile(newThemeProfile)
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setThemeProfile(theme)
    }
  }, [])

  return [themeProfile, toggleTheme]
}