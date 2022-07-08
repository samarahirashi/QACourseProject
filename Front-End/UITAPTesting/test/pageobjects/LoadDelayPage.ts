import AbstractPage from "./AbstractPage";

class LoadDelayPage extends AbstractPage{
    
    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    //Functions
    public async asserturl(){
        expect(browser).toHaveTitleContaining('Load Delays') 
    }

    public async clickbutton(){
        await this.button.waitForExist()
        await this.button.click()
    }

}

export default new LoadDelayPage()