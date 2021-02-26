const supertest = require('supertest')
const server = require('../src/server')
const request = supertest(server.app)



describe('test-suite', () => {
  it('specific test you want to run', async => {
    await request.get('/route')
      .then(data => {
        expect(data.status).toBe(200)
      })
  })
})