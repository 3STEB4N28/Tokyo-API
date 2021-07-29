const fetch = require('node-fetch').default
const base = require('./src/config.json')

module.exports = async(place, token) => {
  if (!place) throw new Error('You need provide a city name!')
  if (!token) throw new Error('You need provide your API key access!')
  try{
   const uwu = await fetch(`${base}weather?city=${place}&key=${token}`)
   const owo = uwu.json()
   return owo
   } catch {
   return `error: ${e}`
   }
