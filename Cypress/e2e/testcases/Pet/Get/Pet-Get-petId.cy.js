/// <reference types= "cypress" />
describe('GET find Pet by Id', function () {
  it('Sending GET to Pet', function () {
    var response = cy.request({
      method: 'GET',
      url: 'http://localhost:8080/api/v3/pet/100',
      body:
      {
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.log(response.body)
    })
  })
})