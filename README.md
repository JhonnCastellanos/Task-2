# test-automation
Any test automation code for all pvolve services

### Install
```
git clone https://github.com/p-volve/test-automation.git
cd test-automation/web-cypress
npm install
```

### Usage
Run all tests(headless) with Allure reports enabled
```
npm run cy:qa:runall
```
```
npm run cy:qa2:runall
```
```
npm run cy:dev:runall
```
<br></br>
Open Cypress Test Runner with Allure reports enabled
```
npm run cy:qa:open
```
```
npm run cy:qa2:open
```
```
npm run cy:dev:open
```
<br></br>
Open Cypress Test Runner without Allure reports
```
npx cypress open --env configFile=qa
```
```
npx cypress open --env configFile=qa2
```
```
npx cypress open --env configFile=dev
```
```
npx cypress open //This will default to qa environment
```
<br></br>
<br></br>
### API-Tests
(These tests are currently not maintained)(related to python language)\
Run inside command line to run the tests: python3 -m pytest tests --environment=qa 
