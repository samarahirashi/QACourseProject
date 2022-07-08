import AbstractPage from "./AbstractPage";

class TextInputPage extends AbstractPage{
    
    //Selectors
    public get button(){
        return $(".btn-primary")
    }
    
    public get inputfield(){
        return $(".form-control")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/textinput")
    }

    public async assertButtonandFormExist(){
        await expect(this.button).toExist()
        await expect(this.inputfield).toExist()
    }

    public async writeOnForm(newname: string){
        await (await this.inputfield).setValue(newname)
    }

    public async clickbutton(){
        await this.button.click()
    }

    public async assertButtonName(name: string){
        await expect(this.button).toHaveText(name)
    }

}

export default new TextInputPage()