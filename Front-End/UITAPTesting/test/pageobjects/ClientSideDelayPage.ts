import AbstractPage from "./AbstractPage";

class ClientSideDelayPage extends AbstractPage{

    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    public get label(){
        return $(".bg-success")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/clientdelay")
    }

    public async assertButtonExists(){
        await expect(this.button).toExist()
    }

    public async clickbutton(){
        await this.button.click()
    }

    public async assertlabel(){
        await (await this.label).waitForDisplayed({timeout:16000})
        await this.label.click()
    }

}

export default new ClientSideDelayPage()