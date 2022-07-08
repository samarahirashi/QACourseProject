import AbstractPage from "./AbstractPage";

class ClickPage extends AbstractPage{
    
    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    public get greenbutton(){
        return $(".btn-success")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/click")
    }

    public async assertButtonExists(){
        await expect(this.button).toExist()
    }

    public async clickbutton(){
        await this.button.click()
        expect(this.greenbutton).toExist()
        await this.greenbutton.click()
        expect(this.greenbutton).toExist()
    }


}

export default new ClickPage()