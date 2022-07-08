import AbstractPage from "./AbstractPage";

class ProgressBarPage extends AbstractPage{

    //Selectors
    public get startButton(){
        return $(".btn-primary")
    }

    public get stopButton(){
        return $(".btn-info")
    }

    public get progressBar(){
        return $(".progress-bar")
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/progressbar")
    }

    public async assertions(){
        await expect(this.startButton).toExist()
        await expect(this.stopButton).toExist()
        await expect(this.progressBar).toExist()
    }

    public async startAndStop(){
        await (await this.startButton).click()

        await this.progressBar.waitUntil(
            async () => (await $('#progressBar').getText()) === '75%',
            {
                timeout: 35000,
            }
        );

        await (await this.stopButton).click()
    }

}

export default new ProgressBarPage()