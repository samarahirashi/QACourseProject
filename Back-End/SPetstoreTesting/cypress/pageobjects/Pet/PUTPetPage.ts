import AbstractPage from "../AbstractPage";

class PUTPetPage extends AbstractPage{

    public PUTPet(){
        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/pet",
            body:{
                "id": 0,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "fluffy",
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
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new PUTPetPage()