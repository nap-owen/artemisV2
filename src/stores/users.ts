import { defineStore } from 'pinia'

export const useUserStore1 = defineStore('users', () => {
  const encrypted = localStorage.getItem('user')
  // const value = ref()
  let value: string | string[]

  const randomString = (length: number) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-'
    const charactersLength = characters.length

    for (let i = 0; i < length; i++)
      result += characters.charAt(Math.floor(Math.random() * charactersLength))

    return result
  }

  const decrypt = () => {
    value = encrypted.split('')
    for (let i = value.length; i > 0; i--) {
      if (i % 5 === 0 && i !== 0) {
        // console.log({ removed: value[i] })
        value.splice(i, 1)
      }
    }
    value = value.join('')
    // console.log({ 'decrypted value': value })
    value = atob(value)
  }

  const encrypt = (valueForEncryption) => {
    const encryptedValue = btoa(JSON.stringify(valueForEncryption))
    const value = encryptedValue.split('')
    for (let i = 0; i < value.length; i++) {
      if (i % 5 === 0 && i !== 0) {
        const s = randomString(1)
        value.splice(i, 0, s)
      }
    }

    const joinValue = value.join('')
    useLocalStorage('user', joinValue)
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
    encrypt,
  }
})
