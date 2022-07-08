import AbstractPage from "../AbstractPage";

class GETInventoryPage extends AbstractPage{

    public GETInventory(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/store/inventory",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETInventoryPage()