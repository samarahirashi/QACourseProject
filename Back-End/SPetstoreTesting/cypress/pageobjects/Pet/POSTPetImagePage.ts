import AbstractPage from "../AbstractPage";

class POSTPetImagePage extends AbstractPage{

    public POSTPetImage(){
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet/1/uploadImage",
            body:{
                file: "https://http2.mlstatic.com/D_NQ_NP_922558-MLM49201943455_022022-O.jpg"
            }
           }).then(response =>{
            expect(response.status).to.eql(200)
           })
    }

}

export default new POSTPetImagePage()