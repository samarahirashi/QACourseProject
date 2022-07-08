import AbstractPage from "./AbstractPage"

class DynamicIDPage extends AbstractPage{

    //Selector
    public get button(){
        return $(".btn-primary")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/dynamicid")
    }

    public async assertButtonExists(){
        await expect(this.button).toExist()
    }

    public async clickbutton(){
        await this.button.click()
    }

}

export default new DynamicIDPage()