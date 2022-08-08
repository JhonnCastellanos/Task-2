/// <reference types="cypress" />
describe('PUT Update an existing pet', function () {
    it('Sending PUT to Pet', function () {
      var response = cy.request({
        method: 'PUT',
        url: 'http://localhost:8080/api/v3/pet/',
        body: {
            "id": 10,
            "name": "doggie",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
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