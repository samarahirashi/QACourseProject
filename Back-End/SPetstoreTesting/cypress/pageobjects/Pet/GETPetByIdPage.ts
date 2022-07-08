import AbstractPage from "../AbstractPage";

class GETPetByIdPage extends AbstractPage{

    public GETPetById(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/9223372036854111904",
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETPetByIdPage()