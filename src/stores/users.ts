import { defineStore } from 'pinia'

export const useUserStore1 = defineStore('users', () => {
  const encrypted = computed<string | null>(() => localStorage.getItem('user'))

  const randomString = (length: number) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-'
    const charactersLength = characters.length

    for (let i = 0; i < length; i++)
      result += characters.charAt(Math.floor(Math.random() * charactersLength))

    return result
  }

  const decrypted = computed(() => {
    const encSplit = encrypted.value?.split('') ?? []

    if (!encSplit.length)
      return ''

    for (let i = encSplit.length; i > 0; i--) {
      if (i % 5 === 0 && i !== 0) {
        // console.log({ removed: value[i] })
        encSplit.splice(i, 1)
      }
    }
    const encJoined = encSplit.join('')
    // console.log({ 'decrypted value': value })
    return atob(encJoined)
  })

  const encrypt = (valueForEncryption: any) => new Promise((resolve) => {
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
    resolve('sheesh')
  })

  const show = () => {
    console.log(value)
  }

  return {
    show,
    decrypted,
    encrypt,
  }
})
