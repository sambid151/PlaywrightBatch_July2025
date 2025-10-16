# AI Agent Instructions for PlayWright POM Framework

## Project Overview
This is a Page Object Model (POM) automation framework built with Playwright for web testing. The framework follows these key patterns:

### Architecture
- `pages/` - Page Object classes containing element locators and actions
- `tests/` - Test specs organized by feature areas
- `fixtures/` - Reusable test fixtures and configurations
- `testdata/` - Test data in JSON format
- `utils/` - Helper utilities

## Key Development Patterns

### Page Objects
- Each page extends `BasePage.js` for common functionality
- Page objects encapsulate locators and page-specific actions
- Example from `pages/LoginPage.js`:
```javascript
export class LoginPage {
    constructor(page) {
        this.emailInput = page.getByPlaceholder('Enter Email');
        this.passwordInput = page.getByPlaceholder('Enter Password');
    }
    
    async fillEmail(email) {
        await this.emailInput.fill(email);
    }
}
```

### Test Structure
- Tests use fixture-based setup from `fixtures/auth.fixture.js`
- Two styles supported:
  1. Using fixtures: `test("scenario", async ({page, loginPage}) => {})`
  2. Direct instantiation: `const loginPage = new LoginPage(page)`
- Test data comes from JSON files in `testdata/`

### Framework Configuration
- `playwright.config.js` contains core settings:
  - Base URL: `https://freelance-learn-automation.vercel.app`
  - Parallel execution disabled
  - Screenshots on failure
  - Video retention on failure
  - Full trace capturing enabled
  - Multiple reporters: line, allure, and HTML

### Development Workflow
1. Create page objects in `pages/` for new UI elements
2. Add test data to `testdata/*.json` if needed
3. Write tests in `tests/` using either fixture or direct instantiation pattern
4. Run tests with default config using playwright commands

### Reporting
- Multiple report formats supported:
  - Console (line reporter)
  - Allure reports in `allure-results/`
  - HTML reports in `playwright-report/`
  - Screenshots in `screenshots/` (failures only)
  - Test traces in `test-results/`

## Common Commands
```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/login/login.spec.js

# View HTML report
npx playwright show-report
```