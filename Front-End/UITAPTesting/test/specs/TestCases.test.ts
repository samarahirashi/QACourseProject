import AJAXDataPage from "../pageobjects/AJAXDataPage";
import ClassAttributePage from "../pageobjects/ClassAttributePage";
import ClickPage from "../pageobjects/ClickPage";
import ClientSideDelayPage from "../pageobjects/ClientSideDelayPage";
import DynamicIdPage from "../pageobjects/DynamicIdPage";
import DynamicTablePage from "../pageobjects/DynamicTablePage";
import HiddenLayersPage from "../pageobjects/HiddenLayersPage";
import HomePage from "../pageobjects/HomePage";
import LoadDelayPage from "../pageobjects/LoadDelayPage";
import MouseOverPage from "../pageobjects/MouseOverPage";
import NonBreakingSpacePage from "../pageobjects/NonBreakingSpacePage";
import OverlappedElementPage from "../pageobjects/OverlappedElementPage";
import ProgressBarPage from "../pageobjects/ProgressBarPage";
import SampleAppPage from "../pageobjects/SampleAppPage";
import ScrollbarsPage from "../pageobjects/ScrollbarsPage";
import ShadowDOMPage from "../pageobjects/ShadowDOMPage";
import TextInputPage from "../pageobjects/TextInputPage";
import VerifyTextPage from "../pageobjects/VerifyTextPage";
import VisibilityPage from "../pageobjects/VisibilityPage";


describe("Dynamic ID",()=>{
    it("Should click a button without using its dynamic ID", async()=>{
        await DynamicIdPage.visit()
        await DynamicIdPage.assertButtonExists()
        await DynamicIdPage.clickbutton()
        await DynamicIdPage.takeScreenshot("DynamicId.png")
    })
})

describe("Class Attribute",()=>{
    it("Should click a button and click ok in a popup", async()=>{
        await ClassAttributePage.visit()
        await ClassAttributePage.assertButtonExists()
        await ClassAttributePage.clickbutton()
        await ClassAttributePage.clickAlert()
        await ClassAttributePage.takeScreenshot("ClassAttribute.png")
    })
})

describe("Hidden Layers",()=>{
    it("Should click a button and it should change to blue",async()=>{
        await HiddenLayersPage.visit()
        await HiddenLayersPage.assertButtonExists()
        await HiddenLayersPage.clickbutton()
        await HiddenLayersPage.takeScreenshot("HiddenLayers.png")
    })
})

describe("Load Delays",()=>{
    it("Should click on a link and wait until it redirects to click on a button",async()=>{
        await HomePage.visit()
        await HomePage.visitLoadDelay()
        await LoadDelayPage.asserturl()
        await LoadDelayPage.clickbutton()
        await LoadDelayPage.takeScreenshot("LoadDelays.png")
    })
})

describe("AJAX Data",()=>{
    it("Should click a button and wait for a label to be displayed",async()=>{
        await AJAXDataPage.visit()
        await AJAXDataPage.clickbutton()
        await AJAXDataPage.assertlabel()
        await AJAXDataPage.takeScreenshot("AJAXData.png")
    })
})

describe("Client Side Delay",()=>{
    it("Should click a button and wait for a label to be displayed", async()=>{
        await ClientSideDelayPage.visit()
        await ClientSideDelayPage.assertButtonExists()
        await ClientSideDelayPage.clickbutton()
        await ClientSideDelayPage.assertlabel()
        await ClientSideDelayPage.takeScreenshot("ClientSideDelay.png")
    })
})

describe("Click",()=>{
    it("Should click a button and it should change to green", async()=>{
        await ClickPage.visit()
        await ClickPage.assertButtonExists()
        await ClickPage.clickbutton()
        await ClickPage.takeScreenshot("Click.png")
    })
})

describe("Text Input",()=>{
    it("Should change the text on a button given a text on an input field", async ()=>{
        await TextInputPage.visit()
        await TextInputPage.assertButtonandFormExist()
        await TextInputPage.writeOnForm("ButtonName")
        await TextInputPage.clickbutton()
        await TextInputPage.assertButtonName("ButtonName")
        await TextInputPage.takeScreenshot("TextInput.png")
    })
})

describe("Scrollbars",()=>{
    it("Should use the scrollbars to find a button and click on it", async()=>{
        await ScrollbarsPage.visit()
        await ScrollbarsPage.findAndClick()
        await ScrollbarsPage.takeScreenshot("Scrollbars.png")
    })
})

describe("Dynamic Table", () =>{
    it("Should get the value of the CPU load and compare it with the yellow label", async()=>{
        await DynamicTablePage.visit()
        await DynamicTablePage.validateLabel()
        await DynamicTablePage.takeScreenshot("DynamicTable.png")
    })
})

describe("Verify Text", ()=>{
    it("Should find an element with a 'Welcome...' text", async()=>{
        await VerifyTextPage.visit()
        await VerifyTextPage.assertAndValidate()
        await VerifyTextPage.takeScreenshot("VerifyText.png")
    })
})

describe("Progress Bar", () =>{
    it("Should click the start button and then stop button when the progress bar is at 75%", async()=>{
        await ProgressBarPage.visit()
        await ProgressBarPage.assertions()
        await ProgressBarPage.startAndStop()
        await ProgressBarPage.takeScreenshot("ProgressBar.png")
    })
})

describe("Visibility", () =>{
    it("Should press the hide button and determine if the other buttons are visible", async()=>{
        await VisibilityPage.visit()
        await VisibilityPage.assertIsVisible()
        await VisibilityPage.clickHide()
        await VisibilityPage.takeScreenshot("Visibility.png")
    })
})

describe("Sample App", () =>{
    it("Should fill a form and send it to log in a user", async()=>{
        await SampleAppPage.visit()
        await SampleAppPage.assertElements()
        await SampleAppPage.fillform("TestUser")
        await SampleAppPage.clickLogIn()
        await SampleAppPage.assertLogIn("TestUser")
        await SampleAppPage.takeScreenshot("SampleApp.png")

    })
})

describe("Mouse Over", () => {
    it("Should increase a counter when a link is clicked", async ()=>{
        await MouseOverPage.visit()
        await MouseOverPage.assertElements()
        await MouseOverPage.clickAndAssert()
        await MouseOverPage.takeScreenshot("MouseOver.png")
    })
})

describe("Non-Breaking Space", () =>{
    it("Should validate a valid and invalid scenario for finding a button",async ()=>{
        await NonBreakingSpacePage.visit()
        await NonBreakingSpacePage.assertButtons()
        await NonBreakingSpacePage.takeScreenshot("NonBreakingSpace.png")
    })
})

describe("Overlapped Element",()=>{
    it("Should scroll an element into view and write on it",async ()=>{
        await OverlappedElementPage.visit()
        await OverlappedElementPage.writeOnInput("Test")
        await OverlappedElementPage.takeScreenshot("OverlappedElement.png")
    })
})

describe("Shadow DOM", ()=>{
    it("Should generate a guid and copy it to the clipboard",async ()=>{
        await ShadowDOMPage.visit()
        await ShadowDOMPage.assertElements()
        await ShadowDOMPage.generateGuid()
        await ShadowDOMPage.copyToClipboard()
        await ShadowDOMPage.assertClipboard()
        await ShadowDOMPage.takeScreenshot("ShadowDOM.png")
    })
})