'use server'
import { GET } from "./api/route"

export const action = async () => {
  const res = await fetch('http://localhost:3000/api/route', {method: 'GET'})
  console.log(res)
  return res
}