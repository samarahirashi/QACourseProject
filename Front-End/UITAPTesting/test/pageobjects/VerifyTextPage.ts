import AbstractPage from "./AbstractPage";

class VerifyTextPage extends AbstractPage{

    //Selectors
    public get label(){
        return $("//span[normalize-space(.)='Welcome UserName!']")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/verifytext")
    }

    public async assertAndValidate(){
        await expect(this.label).toExist()
        await expect(this.label).toHaveText("Welcome...")
    }
    

}

export default new VerifyTextPage()