const fetch = require('node-fetch').default
const base = require('./src/config.json')

module.exports = async(query, token) => {
  if (!query) throw new Error('You need provide a query!')
  if (!token) throw new Error('You need provide your API key access!')
  try{
   const uwu = await fetch(`${base}image-search?query=${query}&key=${token}`)
   const owo = uwu.json()
   return owo
   } catch {
   return `error: ${e}`
   }
}
