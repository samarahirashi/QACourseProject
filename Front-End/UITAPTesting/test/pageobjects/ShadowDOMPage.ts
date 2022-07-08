import AbstractPage from "./AbstractPage";

class ShadowDOMPage extends AbstractPage{
    
    //Selectors
    public get outputfield(){
        return $("guid-generator").shadow$(".edit-field")
    }

    public get generateButton(){
        return $("guid-generator").shadow$(".button-generate")
    }

    public get copyButton(){
        return $("guid-generator").shadow$(".button-copy")   
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/shadowdom")
    }

    public async assertElements(){
        await expect(this.outputfield).toExist()
        await expect(this.generateButton).toExist()
        await expect(this.copyButton).toExist()
    }

    public async generateGuid(){
        await (await this.generateButton).click()
    }

    public async copyToClipboard(){
        await (await this.copyButton).click()
    }

    public async assertClipboard(){
        const clipboardText= ""
        var text = await (await this.outputfield).getValue()
        await expect(clipboardText).toBe(text)
    }

}

export default new ShadowDOMPage()