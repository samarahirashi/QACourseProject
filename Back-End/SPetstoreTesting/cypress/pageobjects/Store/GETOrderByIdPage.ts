import AbstractPage from "../AbstractPage";

class GETOrderByIdPage extends AbstractPage{

    public GETOrderById(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/store/order/7874387707551375544",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETOrderByIdPage()