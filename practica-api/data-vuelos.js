(async () => {

  const fs = require('fs')
  const cities = ['MAD', 'BCN', 'PMI']
  const promises = []

  for (let city of cities) {
    promises.push((async () => {

      let response = await fetch(
        ` https://www.aena.es/sites/Satellite?pagename=AENA_ConsultarVuelos&airport=${city}&flightType=L&dosDias=si`
      )

      let data = await response.json()

      return {
        city: city,
        data
      }
    })())
  }

  const data = await Promise.all(promises)

  fs.writeFileSync('vuelos.json', JSON.stringify(data, null, 2))
})()
