import AbstractPage from "./AbstractPage";

class HiddenLayersPage extends AbstractPage{

    //Selectors
    public get button(){
        return $(".btn-success")
    }

    public get bluebutton(){
        return $(".btn-primary")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/hiddenlayers")
    }

    public async assertButtonExists(){
        await expect(this.button).toExist()
    }

    public async clickbutton(){
        await this.button.click()
        expect(this.bluebutton).toExist()
        await this.bluebutton.click()
        expect(this.bluebutton).toExist()
    }

}

export default new HiddenLayersPage()