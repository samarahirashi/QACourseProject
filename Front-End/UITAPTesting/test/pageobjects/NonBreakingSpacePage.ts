import AbstractPage from "./AbstractPage";

class NonBreakingSpaces extends AbstractPage{
    
     //Selectors
     public get button(){
        return $("/html/body/section/div/button[text()='My\u00A0Button']")
    }

    public get invalidButton(){
        return $("/html/body/section/div/button[text()='My Button']")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/nbsp")
    }

    public async assertButtons(){
        await expect(this.invalidButton).not.toExist()
        await expect(this.button).toExist()
    }


}

export default new NonBreakingSpaces()