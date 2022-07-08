import AbstractPage from "../AbstractPage";

class GETUserLoginPage extends AbstractPage{

    public GETUserLogin(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/login?username=string&password=test",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETUserLoginPage()