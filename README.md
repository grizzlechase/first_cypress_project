# CompanyCam Automated Tests
## General Info
I created three Cypress files to automate the login, creating a new project, and uploading a photo to a project.

## Files to run:
* integration/create.new.project.js
* integratioin/login.js
* integration/upload.file.to.project.js

## How To Run
This test has a general `email` and `password` field that
you can put in your own credentials locally to run. 

You will need to install the following to run the upload test:
* npm install --save-dev cypress-file-upload

I already have the `import` in the `commands.js` file