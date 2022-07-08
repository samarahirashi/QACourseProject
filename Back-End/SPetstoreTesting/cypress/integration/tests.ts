import DELETEPetByIdPage from "../pageobjects/Pet/DELETEPetByIdPage"
import GETPetByIdPage from "../pageobjects/Pet/GETPetByIdPage"
import GETPetByStatusPage from "../pageobjects/Pet/GETPetByStatusPage"
import POSTOrderPage from "../pageobjects/Store/POSTOrderPage"
import POSTPetByIdPage from "../pageobjects/Pet/POSTPetByIdPage"
import POSTPetImagePage from "../pageobjects/Pet/POSTPetImagePage"
import POSTPetPage from "../pageobjects/Pet/POSTPetPage"
import PUTPetPage from "../pageobjects/Pet/PUTPetPage"
import GETOrderByIdPage from "../pageobjects/Store/GETOrderByIdPage"
import DELETEOrderPage from "../pageobjects/Store/DELETEOrderPage"
import GETInventoryPage from "../pageobjects/Store/GETInventoryPage"
import POSTUserByArrayPage from "../pageobjects/User/POSTUserByArrayPage"
import POSTUserByListPage from "../pageobjects/User/POSTUserByListPage"
import GETUserByUsernamePage from "../pageobjects/User/GETUserByUsernamePage"
import PUTUserPage from "../pageobjects/User/PUTUserPage"
import DELETEUserPage from "../pageobjects/User/DELETEUserPage"
import GETUserLoginPage from "../pageobjects/User/GETUserLoginPage"
import GETUserLogoutPage from "../pageobjects/User/GETUserLogoutPage"
import POSTUserPage from "../pageobjects/User/POSTUserPage"


describe.skip("Pet Requests",()=>{

    it("Creates a new Pet",()=>{
        POSTPetPage.POSTPet()
    }),

    it("Uploads an existing Pet",()=>{
        PUTPetPage.PUTPet()
    }),

    it("Gets a Pet by its Status",()=>{
        GETPetByStatusPage.GETPetByStatus()
    }),

    it("Gets a Pet by its Id",()=>{
        GETPetByIdPage.GETPetById()
    }),

    it("Updates a Pet by its Id",()=>{
        POSTPetByIdPage.POSTPetById()
    }),

    it("Deletes a Pet by its Id", ()=>{
        DELETEPetByIdPage.DELETEPetById()
    })

})

describe.skip("Store Requests",()=>{

    it("Creates a new Order",()=>{
        POSTOrderPage.POSTOrder()
    }),

    it("Gets an Order by its Id", ()=>{
        GETOrderByIdPage.GETOrderById()
    }),

    it("Deletes an Order",()=>{
        DELETEOrderPage.DELETEOrder()
    }),

    it("Gets the Inventory",()=>{
        GETInventoryPage.GETInventory()
    })

})

describe.skip("User Requests",()=>{

    it("Creates users from an Array",()=>{
        POSTUserByArrayPage.POSTUserByArray()
    }),

    it("Creates users from a List",()=>{
        POSTUserByListPage.POSTUserByList()
    }),

    it("Gets a User by its Username",()=>{
        GETUserByUsernamePage.GETUserByUsername()
    }),

    it("Updates an existing User",()=>{
        PUTUserPage.PUTUser()
    }),

    it("Deletes a User",()=>{
        DELETEUserPage.DELETEUser()
    }),

    it("Logs in a User",()=>{
        GETUserLoginPage.GETUserLogin()
    }),

    it("Logs out a User",()=>{
        GETUserLogoutPage.GETUserLogout()
    }),

    it.only("Creates a new User",()=>{
        POSTUserPage.POSTUser()
    })
})