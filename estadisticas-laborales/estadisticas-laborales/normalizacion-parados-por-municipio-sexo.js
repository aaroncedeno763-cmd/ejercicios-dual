(async () => {

  const fs = require('fs/promises')

  try {

    let file1 = await fs.readFile('./data/normalizacion-parados-por-municipio-sexo.json', 'utf-8')
    let file2 = await fs.readFile('./data/normalizacion-afiliados-por-municio-sexo.json', 'utf-8')
    let data1 = JSON.parse(file1)
    let data2 = Object.values(JSON.parse(file2)).flat()

    let filterData1 = data1
    let filterData2 = data2

    filterData1 = filterData1.filter(element => {
      return element.cantidad !== null &&
        element.periodo <= "2026T1"
    })


    await fs.writeFile('./data/porcentaje.json', JSON.stringify(porcen, null, 2));



  } catch (error) {
    console.log(error)
  }
})()