const fetch = require('node-fetch').default
const { base } = require('./src/config.json')

module.exports = async(text, language, token) => {
  if (!text) throw new Error('You need provide a text to translate!')
  if (!language) throw new Error('You need provide a language to translate!')
  if (!token) throw new Error('You need provide your API key access!')
  try{
   const uwu = await fetch(`${base}translate?text=${text}&to=${language}&key=${token}`)
   const owo = uwu.json()
   return owo
   } catch {
   return `error: ${e}`
   }
}
