import AbstractPage from "./AbstractPage";

class MouseOverPage extends AbstractPage{

    //Selectors
    public get clickMeLink(){
        return $(".text-primary")
    }

    public get clickCount(){
        return $("#clickCount")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/mouseover")
    }

    public async assertElements(){
        await expect(this.clickMeLink).toExist()
        await expect(this.clickCount).toExist()
    }

    public async clickAndAssert(){
        await expect(this.clickCount).toHaveText("0")
        await (await this.clickMeLink).click()
        await expect(this.clickCount).toHaveText("1")
    }

}

export default new MouseOverPage()