import AbstractPage from "./AbstractPage";

class ScrollbarsPage extends AbstractPage{
    
    //Selectors
    public get button(){
        return $(".btn-primary")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/scrollbars")
    }

    public async findAndClick(){
        await (await this.button).scrollIntoView()
        await (await this.button).click()
    }

}

export default new ScrollbarsPage()