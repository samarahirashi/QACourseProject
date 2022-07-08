import AbstractPage from "./AbstractPage";

class OverlappedElementPage extends AbstractPage{

    //Selectors
    public get inputField(){
        return $("#name")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/overlapped")
    }

    public async writeOnInput(name: string){
      await (await this.inputField).scrollIntoView()
      await (await this.inputField).setValue(name)
    }

}

export default new OverlappedElementPage()