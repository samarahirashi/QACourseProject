import AbstractPage from "./AbstractPage";

class ClassAttributePage extends AbstractPage{

    //Selectors 
    public get button(){
        return $(".btn-primary")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/classattr")
    }

    public async assertButtonExists(){
        await expect(this.button).toExist()
    }

    public async clickbutton(){
        await this.button.click()
    }

    public async clickAlert(){
        const isOpen = browser.isAlertOpen()
        if (isOpen){
            await browser.acceptAlert()
        }
    }

}

export default new ClassAttributePage()