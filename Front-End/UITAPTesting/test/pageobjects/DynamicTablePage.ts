import AbstractPage from "./AbstractPage";

class DynamicTablePage extends AbstractPage{

    //Selectors

    public get table(){
        return $('[role=table]')
    }

    public get label(){
        return $('.bg-warning')
    }

    //Functions
    public async visit(){
        await browser.url("http://uitestingplayground.com/dynamictable")
    }

    public async readTable(){
        for(let i = 1; i <= 5; i++){
            if(await (await this.table).$$('[role=rowgroup]')[0].$('[role=row]').$$('span')[i].getText() === 'CPU'){
                 return i   
            }
        }
    }

    public async getChromeValue() {
        const index = await this.readTable()
        for(let i = 0; i <= 3; i++){
            if(await (await this.table).$$('[role=rowgroup]')[1].$$('[role=row]')[i].$('span').getText() === 'Chrome'){
                const chromeCPU = (await this.table).$$('[role=rowgroup]')[1].$$('[role=row]')[i].$$('span')[index].getText()
                return (await chromeCPU).valueOf()
            }
        }        
    }

    public async validateLabel(){
        const chromeCPU = await this.getChromeValue()
        const labelText = await (await this.label).getText()
        expect(labelText).toHaveTextContaining(chromeCPU)
    }


}

export default new DynamicTablePage()