import AbstractPage from "../AbstractPage";

class DELETEOrderPage extends AbstractPage{

    public DELETEOrder(){
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/store/order/7874387707551375546",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new DELETEOrderPage()