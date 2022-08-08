/// <reference types= "cypress" />
describe('GET finds Pets by Status', function () {
  it('Sending GET to Pet', function () {
    var response = cy.request({
      method: 'GET',
      url: 'http://localhost:8080/api/v3/pet/findByStatus?status=available',
      body:
      {
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.log(response.body)
    })
  })
})