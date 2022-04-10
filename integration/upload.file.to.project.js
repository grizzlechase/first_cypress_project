describe('Upload a file to my project', () => {
  beforeEach(() => {
    cy.visit('app.companycam.com')
    cy.get("input[id=user_email_address]").type(email)
    cy.get("input[id=user_password]").type(password).type("{enter}")
  })

it('upload a photo to my project', () => {
  // Set the variables to use for the upload photo page
  const add_photo_button = ("button[type=button][class='mp-track ccb-blue-large']")
  const photo_dropzone = ("div[class='photo-drop-zone']")
  const close_modal_button = ("a[class='modal-close-button']")

  // Go directly to my created project
  cy.visit('https://app.companycam.com/projects/38241498/photos')
  cy.get(add_photo_button).click()
  const image_path = 'house_project.jpeg'
  cy.get(photo_dropzone).attachFile(image_path, { subjectType: 'drag-n-drop' });
  cy.get(close_modal_button).click()
  })
})