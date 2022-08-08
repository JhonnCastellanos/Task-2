/// <reference types="cypress" />
describe('POST add a new pet to the store', function () {
  it('Sending POST to Pet', function () {
    var response = cy.request({
      method: 'POST',
      url: 'http://localhost:8080/api/v3/pet/',
      body: 
      {
        "id": 100,
        "name": "Jhonn",
        "category": {
          "id": 100,
          "name": "Jhonn"
        },
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 100,
            "name": "Jhonn"
          }
        ],
        "status": "available"
      }
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.log(response.body)
    })
  })
})