import AbstractPage from "../AbstractPage";

class POSTPetByIdPage extends AbstractPage{

    public POSTPetById(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet/9223372036854775807"
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new POSTPetByIdPage()