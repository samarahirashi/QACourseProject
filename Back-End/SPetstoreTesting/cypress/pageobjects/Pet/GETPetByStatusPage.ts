import AbstractPage from "../AbstractPage";

class GETPetByStatusPage extends AbstractPage{

    public GETPetByStatus(){

        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/findByStatus",
            body:{
                "status":"pending"
            }
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new GETPetByStatusPage()