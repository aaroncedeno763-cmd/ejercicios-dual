(async () => {

  const fs = require('fs/promises')

  try {

    const file = await fs.readFile('./data/afiliados-por-municio-sexo.json', 'utf-8')
    let data = JSON.parse(file)
    data = data.series[0].data

    let filterData = data.filter(element => {
      return element.Sexo !== "TOTAL" &&
        element["Isla y municipio de residencia"] !== "ILLES BALEARS" &&
        element["Isla y municipio de residencia"] !== "MALLORCA" &&
        element["Isla y municipio de residencia"] !== "MENORCA" &&
        element["Isla y municipio de residencia"] !== "EIVISSA" &&
        element["Isla y municipio de residencia"] !== "FORMENTERA" &&
        element["Isla y municipio de residencia"] !== "Sin descripción"
    });

    filterData = filterData.reduce((acumulador, element) => {
      let codigoPostal = element["Isla y municipio de residencia"].split(" ")[0]
      let periodo = element["Periodo"]
      let municipio = element["Isla y municipio de residencia"].split(" ").slice(1).join(" ")
      let cantidad = element["valor"].replaceAll('.', '')
      let sexo = element["Sexo"] === "Hombres" ? "M" : "F"

      if (municipio.includes("(")) {
        const partes = municipio.split("(")
        const nombre = partes[0].trim()
        const articulo = partes[1].replace(")", "")
        municipio = `${articulo} ${nombre}`
      }

      if (!acumulador[codigoPostal]) {
        acumulador[codigoPostal] = {
          M: {},
          F: {}
        }
      }
      if (!acumulador[codigoPostal][sexo][periodo]) {
        acumulador[codigoPostal][sexo][periodo] = []
      }

      acumulador[codigoPostal][sexo][periodo].push({ municipio, cantidad })

      return acumulador
    }, {})


    await fs.writeFile('./data/normalizacion-afiliados-por-municio-sexo.json', JSON.stringify(filterData, null, 2))



  } catch (error) {
    console.log(error)
  }
})()