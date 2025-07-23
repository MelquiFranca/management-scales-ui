import jwt from 'jsonwebtoken'

export const getTokenData = () => {
  const token = localStorage.getItem('management-squad-token')
  return jwt.decode(token, { complete: true })
}
export const verifyLocalTokenValidation = () => {
  try {
    const token = localStorage.getItem('management-squad-token')
    if(!token) return false
    return true
  } catch (err) {
    console.log(err.message)
    return false
  }
}
export const saveToken = (token) => {
  localStorage.setItem('management-squad-token', token)
}