import AbstractPage from "../AbstractPage";

class DELETEPetByIdPage extends AbstractPage{

    public DELETEPetById(){
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/pet/9223372036854112042",
            qs:{
                api_key:"special-key"
            }
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new DELETEPetByIdPage()