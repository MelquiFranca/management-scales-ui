const HOST = process.env.APP_HOST || 'http://localhost:8002/'
const TOKEN_TEST = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODFhNTRhMGI1ZWM0NGVhMGI5MjE2MTQiLCJuYW1lIjoiTWVscXVpIFAuIEZyYW5jYSIsInVzZXJuYW1lIjoiZnJhbmNhIiwidHlwZSI6InVzZXIiLCJncm91cElkIjoiNjA3YzcyNGEwMTcxNTkwMDE1ZmY5Yzk0IiwiaWF0IjoxNzQ4NzAwMjE1LCJleHAiOjIxMDg3MDAyMTV9.wJKHiWCa_ZSvY76_wypj0rEDQ3MMzwczi4IyAi8DlZ0'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN_TEST}`
}

export const getMembers = async () => {
  const result = await fetch(`${HOST}members`, {
    method: 'GET',
    headers,
    cache: 'force-cache',
    next: {
      revalidate: 5//(60 * 60 * 24) * 5 // 5 days
    }
  })
  const { members } = await result.json()
  return members
}
export const postMember = async (id, body) => {
  const result = await fetch(`${HOST}members/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data'
    },
    body: JSON.stringify(body)
  })
  const data = await result.json()
  return data
}
// export const validateLogin = async (email, senha) => {
//   const result = await connection.post('validaEmailSenhaPessoa', { email, senha })
//   return result
// }
// export const postCult = async (data) => {
//   const result = await connection.post('cultos', data)
//   return result
// }
// export const updateUnavaliableMembers = async ({ memberId, unavaliableCultIds }) => {
//   const result = await connection.post(`cultos/membros/indisponiveis`, {
//     pessoaId: memberId,
//     cultosIndisponiveis: unavaliableCultIds
//   })
//   return result
// }
// export const postScale = async (data) => {
//   const result = await connection.post('escalas', data)
//   return result
// }
// export const updateAnnotationScale = async (data) => {
//   const result = await connection.post(`escalas/anotacoes/${data._id}`, data)
//   return result
// }
// export const getCults = async (groupId) => {
//   const { data } = await connection.get(`cultos/${groupId}`)
//   return data || []
// }
// export const getScales = async (groupId) => {
//   const { data } = await connection.get(`escalas/${groupId}`)
//   return data || []
// }
// export const deleteScale = async (id) => {
//   const { data } = await connection.post(`escalas/excluir/${id}`)
//   return data
// }
// export const deleteMembers = async (id) => {
//   const { data } = await connection.post(`pessoas/excluir/${id}`)
//   return data
// }
// export const deleteCults = async (id) => {
//   const { data } = await connection.post(`cultos/excluir/${id}`)
//   return data
// }
// export const pushNotification = async (subscription) => {
//   await connection.post('notification/push/send', {
//     subscription,
//     dataMessage: {
//       title: 'Escala Musical',
//       body: 'Nova escala criada',
//       image: './favicon-32.png'
//     }
//   })
// }
