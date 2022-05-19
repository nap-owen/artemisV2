import { defineStore } from 'pinia'

export const useUserStore1 = defineStore('users', () => {
  const encrypted = localStorage.getItem('user')
  // const value = ref()
  let value: string | string[]

  const decrypt = () => {
    value = encrypted.split('')
    for (let i = value.length; i > 0; i--) {
      if (i % 5 === 0 && i !== 0) {
        // console.log({ removed: value[i] })
        value.splice(i, 1)
      }
    }
    value = value.join('')
    console.log({ 'decrypted value': value })
    value = atob(value)
  }

  if (encrypted)
    decrypt()

  const show = () => {
    console.log(value)
  }
  return {
    show,
    value,
    decrypt,
  }
})
