function onload() {
  console.log('hello world')
}

window.onload = onload;

// module.exports = (on, config) => {
//   on('task', {
//     log (message) {
//       console.log(message)
  
//       return null
//     }
//   })
// }

// cy.task("htmlvalidateOptions", null, { log: false }).then((options) => {
//     cy.document({ log: false }).then((document) => {
//         const source = utils_1.getPageSource(document)}