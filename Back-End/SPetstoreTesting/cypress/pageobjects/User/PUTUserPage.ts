import AbstractPage from "../AbstractPage";

class PUTUserPage extends AbstractPage{

    public PUTUser(){
        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/user/string",
            body:{
                "id": 0,
                "username": "string",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0
              }
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new PUTUserPage()