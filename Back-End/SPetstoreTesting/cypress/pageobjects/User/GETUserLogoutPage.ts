import AbstractPage from "../AbstractPage";

class GETUserLogoutPage extends AbstractPage{

    public GETUserLogout(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/logout",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETUserLogoutPage()