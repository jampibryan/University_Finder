
// Importamos rest para definir las rutas de la API y las respuestas que se deben devolver 

import { rest } from "msw";

const handlers = [
  rest.get('http://universities.hipolabs.com/search', (req, res, ctx) => {
    return res(
      ctx.status(500)
    )
  })
]

export { handlers }