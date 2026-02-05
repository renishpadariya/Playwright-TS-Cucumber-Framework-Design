# Playwright + TypeScript + Cucumber (BDD) Automation Framework

This repository contains a **BDD-style test automation framework** built using **Playwright**, **TypeScript**, and **Cucumber**.  
It is designed for **scalability**, **readability**, and **CI/CD readiness**, following real-world automation best practices.
---

## Tech Stack

- **Playwright** – Browser automation
- **Cucumber (BDD)** – Gherkin feature files
- **TypeScript** – Strong typing & maintainability
- **Node.js / npm**
- **Cucumber HTML Reporter** – Execution reports with screenshots

---

## Project Structure
![Playwright-BDD-TS-FramworkDesign](assets\Playwright-BDD-TS-FramworkDesign.png)



## Environment Configuration (.env)

This project uses a '.env' file to manage sensitive and environment-specific data.

## Create a '.env' file in the project root:

BASE_URL=https://example.com

USERNAME=standard_user

PASSWORD=secret_sauce

BROWSER=chromium | Firefox | Webkit (you can write any one value as per your choice)

**Important**
- '.env' is added to '.gitignore'
- Do **NOT** commit '.env' to GitHub
- Each user / CI environment should provide its own '.env'

---

## Installation

### 1 Clone the repository
git clone https://github.com/renishpadariya/Playwright-TS-Cucumber-Framework-Design.git

cd Playwright-TS-Cucumber-Framework-Design

### 2 Install dependencies
npm install

### 3 Install Playwright browsers
npx playwright install

---

###  Execute Tests
Run all Cucumber scenarios:
npx cucumber-js

---

### Test Reports
## Standard HTML Report
After execution, the HTML report is generated at:
reports/html-report/index.html

# This report includes:
Passed / Failed scenario count

Step-level execution status

Error messages

Screenshots for failed scenarios

## Advanced HTML Report
After running the tests, execute the following Node command:

node ./utils/generate-advanced-report.js

This command:

Reads the Cucumber JSON output

Generates a detailed HTML report with charts and visuals

Generated at:

reports/html-report/advanced-report.html

# Advanced report features:

Graphical execution summary

Scenario and step-level details

Failure screenshots

Clear visual representation for analysis and reporting

## How to open report:

Double-click the file

OR

Right-click → Open with browser

---
### Screenshots on Failure
Screenshots are automatically captured only for failed scenarios using Cucumber After hooks and Playwright’s screenshot API.

---
### Framework Design Highlights

BDD with Gherkin for business-readable tests

CustomWorld for scenario-level isolation

One browser instance per scenario

Page Object Model (POM) for maintainability

Environment-based execution

