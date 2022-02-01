
function layoutWith(content){
  return (`
<!DOCTYPE html>
<html lang="es">
<body>
  <pre>
${content}
  </pre>
</body>
</html>
  `)
}

function fieldsInfo(fields) {
  let res = ''

  for(let field in fields){
    res += `Field name:${field} Field value:-${fields[field]}-\n` 
  }

  return res
}

function echoFields(req) {
  const fields = req.method === 'POST' ? req.body : req.query
  const content = `
Form method: ${req.method}\n\n
${fieldsInfo(fields)}
  `
  return layoutWith(content)
}

export default echoFields