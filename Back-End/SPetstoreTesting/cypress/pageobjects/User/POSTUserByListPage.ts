import AbstractPage from "../AbstractPage";

class POSTUserByListPage extends AbstractPage{

    public POSTUserByList(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user/createWithList",
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

export default new POSTUserByListPage()