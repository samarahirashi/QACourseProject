import AbstractPage from "../AbstractPage";

class DELETEUserPage extends AbstractPage{

    public DELETEUser(){
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/user/string"
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new DELETEUserPage()