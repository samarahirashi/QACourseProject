import AbstractPage from "../AbstractPage";

class POSTPetPage extends AbstractPage{

    public POSTPet(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            body:{
                "id": 0,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "doggie",
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

export default new POSTPetPage()