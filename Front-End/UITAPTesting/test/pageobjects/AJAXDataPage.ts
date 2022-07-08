import AbstractPage from "./AbstractPage";

class AJAXDataPage extends AbstractPage{
    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    public get label(){
        return $(".bg-success")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/ajax")
    }

    public async clickbutton(){
        await this.button.click()
    }

    public async assertlabel(){
        await (await this.label).waitForDisplayed({timeout:16000})
    }
}

export default new AJAXDataPage()