import AbstractPage from "../AbstractPage";

class POSTOrderPage extends AbstractPage{

    public POSTOrder(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/store/order",
            body:{
                "id": 0,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2022-07-05T16:35:13.869Z",
                "status": "placed",
                "complete": true
              }
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new POSTOrderPage()