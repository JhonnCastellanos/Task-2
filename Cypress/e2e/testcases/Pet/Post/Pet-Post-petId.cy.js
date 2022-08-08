/// <reference types="cypress" />
describe('POST Updates a pet in tyhe with form data', function () {
  it('Sending POST to Pet', function () {
    var response = cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/v3/pet/100?name=Jhonn&status=available',
      body: 
      {
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.log(response.body)
    })
  })
})