import AbstractPage from "./AbstractPage";

class VisibilityPage extends AbstractPage{
    
    //Selectors
    public get hideButton(){
        return $(".btn-primary")
    }

    public get removedButton(){
        return $(".btn-danger")
    }

    public get zeroWidthButton(){
        return $(".btn-warning")
    }

    public get overlappedButton(){
        return $(".btn-success")
    }

    public get opacityButton(){
        return $("#transparentButton")
    }

    public get visibilityButton(){
        return $("#invisibleButton")
    }

    public get displayButton(){
        return $("#notdisplayedButton")
    }

    public get offscreenButton(){
        return $("#offscreenButton")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/visibility")
    }

    public async assertIsVisible(){
        await expect(this.hideButton).toBeDisplayed()
        await expect(this.removedButton).toBeDisplayed()
        await expect(this.zeroWidthButton).toBeDisplayed()
        await expect(this.overlappedButton).toBeDisplayed()
        await expect(this.opacityButton).toBeDisplayed()
        await expect(this.visibilityButton).toBeDisplayed()
        await expect(this.displayButton).toBeDisplayed()
        await expect(this.offscreenButton).toBeDisplayed()
    }

    public async clickHide(){
        await (await this.hideButton).click()
    }

    public async assertExists(){
        await expect(this.removedButton).toExist()
        await expect(this.zeroWidthButton).toExist()
        await expect(this.overlappedButton).toExist()
        await expect(this.opacityButton).toExist()
        await expect(this.visibilityButton).toExist()
        await expect(this.displayButton).toExist()
        await expect(this.offscreenButton).toExist()
    }

}

export default new VisibilityPage()