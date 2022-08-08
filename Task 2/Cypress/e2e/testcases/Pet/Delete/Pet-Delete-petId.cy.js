/// <reference types="cypress" />
describe('DELETE delete a pet', function () {
  it('Sending DELETE to Pet', function () {
    var response = cy.request({
      method: 'DELETE',
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