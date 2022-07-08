import AbstractPage from "../AbstractPage";

class GETUserByUsernamePage extends AbstractPage{

    public GETUserByUsername(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/string",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETUserByUsernamePage()