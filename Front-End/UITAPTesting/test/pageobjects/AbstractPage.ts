const crypto = require('crypto')

export default class AbstractPage{

    public async waitForSeconds(seconds: number){
        await browser.pause(seconds * 1000)
    }

    public async setFullHDResolution(){
        //For the devices resolutions etc
        await browser.setWindowSize(1980, 1080)
    }

    public async setNetworkSpeed3G(speed){
        await browser.throttle(speed)
    }

    public async takeScreenshot(filename: string){
        await browser.saveScreenshot("Screenshots/"+filename)
    }

    public async generateRandomNumber(){
        return Math.floor(Math.random()*100000+1)
    }

    public async generateRandomString(){
        return crypto.randomBytes(20).toString("hex")
    }
    
}
