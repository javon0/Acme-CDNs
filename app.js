
const companiesApi = axios.get('https://acme-users-api-rev.herokuapp.com/api/companies')
const productsApi = axios.get('https://acme-users-api-rev.herokuapp.com/api/products')

const productsTab = document.querySelector('#productsTab')
const companiesTab = document.querySelector('#companiesTab')
const tableHead = document.getElementById('tableTab')
const tableBody = document.querySelector('tbody')
Promise.all([companiesApi, productsApi])
.then(result => [companies, products] = result)
.then(result => {
    let productTabHtml = `
        Products (${products.data.length})
    `
    let companiesTabHtml = `
        Companies (${companies.data.length})
    `
    
    productsTab.innerHTML = productTabHtml
    companiesTab.innerHTML = companiesTabHtml

})
.then(result => {
   const headTitle =  Object.keys(products.data[0])
   headTitle.forEach(x => {

  let html = `<th>${x.toUpperCase()}</th>`
    tableHead.innerHTML += html


   })

   const data = products.data
// let answer = data.map(obj => {
//        let html = ''
//         html += '<tr>'
//         Object.values(obj).forEach(x => {
//            html +=  `<td>${x}</td>`
//         })
//         html += '</tr>'
        
//    }).join('')
let counter = 0
  data.forEach(x => {
      tableBody.innerHTML = `<tr id="row${counter}></tr>`
      for (let key in x){
          `<td>${x[key]}</td>`
      }
  })

    
})

//markbaydoun