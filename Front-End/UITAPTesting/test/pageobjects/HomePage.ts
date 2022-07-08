import AbstractPage from "./AbstractPage"

class HomePage extends AbstractPage{
    
    //Selectors
    public get LoadDelayLink(){
        return $('a[href="/loaddelay"]')
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/")
    }

    public async visitLoadDelay(){
        await (await this.LoadDelayLink).click()
    }

}

export default new HomePage()