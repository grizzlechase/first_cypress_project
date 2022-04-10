describe('Create a new project manually', () => {
    beforeEach(() => {
      cy.visit('app.companycam.com')
      cy.get("input[id=user_email_address]").type(email)
      cy.get("input[id=user_password]").type(password).type("{enter}")

      // Validates the URL is redirected to the proper page after login
      cy.url().should('include', 'app.companycam.com/projects')
    })


it('manually create a new project', () => {
    // For simplicity sake, we will start on the new project page to create our new project
    // Setting the variables here to be able to use for all of the fields for a new project
    // I'm not familiar at all with Cypress, but I'd like to figure out how to
    // use built in cypress functions to store variables to reuse
    const project_name = ("Pinnacle Bank Arena Test Project")
    const project_address_one = ("400 Pinnacle Arena Dr")
    const city = ("Lincoln")
    const state = ("NE")
    const postal_code = ("68508")

    const close_modal_button = ("i[class='mdi mdi-close']")
    const project_name_input = ("input[id=name]")
    const street_address_one_input = ("input[id=street_address_1]")
    const city_input = ("input[id=city]")
    const state_input = ("input[id=state]")
    const postal_code_input = ("input[id=postal_code]")
    const form_submit_button = ("button[type=submit][class='btn ccb-blue ccb-full']")

    cy.visit('https://app.companycam.com/projects/new')

    // Closes the pop up modal to search for location by address so we can enter manually
    cy.get(close_modal_button).click()
    cy.get(project_name_input).type(project_name)
    cy.get(street_address_one_input).type(project_address_one)
    cy.get(city_input).type(city)
    cy.get(state_input).type(state)
    cy.get(postal_code_input).type(postal_code)
    cy.get(form_submit_button).click()

    // If I had more time, I'd like to extract the projectId that is in the URL to validate
    // this new project was created properly
  })

it('submit empty form to validate error messaging', () => {
    // This test validates that submitting the empty form has proper error messaging
    // is displaying to the user

    cy.visit('https://app.companycam.com/projects/new')
    cy.get("i[class='mdi mdi-close']").click()
    cy.get("button[type=submit][class='btn ccb-blue ccb-full']").click()
    cy.get("span[class=validation-error")
      .contains("Name or address required")

  })
})