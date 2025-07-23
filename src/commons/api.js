import { saveToken } from "./authentication"

const HOST = process.env.APP_HOST || 'http://localhost:8002/'
const TOKEN_TEST = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQ3NWE0ZmYwN2JlNWQxNjU5MTZiNmMiLCJuYW1lIjoiRXN0ZXIgMiIsInVzZXJuYW1lIjoiZXN0ZXJ6aW5oYSAyIiwicGhvdG8iOiJodHRwczovL3d3dy5nb29nbGUuY29tLmJyIiwiYmlydGhkYXkiOiIyMDI1LTA1LTA1VDEyOjQ0OjMyLjMzOFoiLCJ0eXBlIjoidXNlciIsImdyb3VwcyI6WyI2ODFiYzBhMGJiMDUyZTQ4NDkzMzM2M2UiXSwiZ3JvdXBzRGF0YSI6W3siX2lkIjoiNjgxYmMwYTBiYjA1MmU0ODQ5MzMzNjNlIiwibmFtZSI6IkNodXJjaCBNdXNpYyIsImltYWdlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS5iciIsImNyZWF0ZWQiOiIyMDI1LTA1LTA3VDIwOjIwOjQ4LjM5OVoifV0sImlhdCI6MTc1MjEwMTYyMywiZXhwIjoyMTEyMTAxNjIzLCJhdWQiOiJ1c2VyIn0.Wv_vvkFzEEUxm5DIkkb7pWadsuRDY6c8QM4I2awoDHo'
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN_TEST}`
}

const getEntity = async (entityName, cached = false) => {
  const result = await fetch(`${HOST}${entityName}`, {
    method: 'GET',
    headers,
    ...(cached && {
      cache: 'force-cache',
      next: {
        revalidate: 5//(60 * 60 * 24) * 5 // 5 days
      }
    })
  })
  const data = await result.json()
  return data[entityName]
}
const putEntity = async (entityName, id, body) => {
  const result = await fetch(`${HOST}${entityName}/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      // 'Content-Type': 'multipart/form-data'
    },
    body: JSON.stringify(body)
  })
  const data = await result.json()
  return data
}

export const getMembers = () => getEntity('members', true)
export const getScales = () => getEntity('scales')
export const getEvents = () => getEntity('events')
export const putMember = (id, body) => putEntity('members', id, body)
export const putScale = (id, body) => putEntity('scales', id, body)
export const putEvent = (id, body) => putEntity('events', id, body)

export const login = async (username, password) => {
  const result = await fetch(`${HOST}login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ username, password })
  })
  const token = await result.json()
  saveToken(token)
  return token
}
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
