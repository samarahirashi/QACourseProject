import AbstractPage from "../AbstractPage";

class POSTUserByArrayPage extends AbstractPage{

    public POSTUserByArray(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user/createWithArray",
            body: [
                {
                  "id": 0,
                  "username": "string",
                  "firstName": "string",
                  "lastName": "string",
                  "email": "string",
                  "password": "string",
                  "phone": "string",
                  "userStatus": 0
                }
              ]
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new POSTUserByArrayPage()