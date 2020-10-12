// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// exports.handler = async (event, context) => {
//   try {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (err) {
//     return { statusCode: 500, body: err.toString() }
//   }
// }




// RANDOM NAME
var random = require('random-name')

exports.handler = async (e, context) => {
  try {
    let first_name = random.first()
    let last_name = random.last()
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Dear ${first_name} ${last_name}` }),

    }
  }
  catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}




