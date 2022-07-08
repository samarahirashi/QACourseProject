import AbstractPage from "./AbstractPage";

class SampleAppPage extends AbstractPage{

    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    public get usernameField(){
        return $('[name="UserName"]')
    }

    public get passwordField(){
        return $('[name="Password"]')
    }

    public get label(){
        return $(".text-success")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/sampleapp")
    }

    public async assertElements(){
        await expect(this.button).toExist()
        await expect(this.usernameField).toExist()
        await expect(this.passwordField).toExist()
    }

    public async fillform(user: string){
        await (await this.usernameField).setValue(user)
        await (await this.passwordField).setValue("pwd")
    }

    public async clickLogIn(){
        await (await this.button).click()
    }

    public async assertLogIn(user:string){
        await expect(this.label).toHaveTextContaining("Welcome, "+user)
    }

}

export default new SampleAppPage()