## End-to-End Testing with Playwright

- Added Playwright for automated browser testing of critical user flows.
- Created `playwright.config.ts` to configure test projects and reporters.
- Added example tests in `tests/example.spec.ts` covering page load and language selector functionality.
- Added npm scripts:
  - `test:e2e`: runs Playwright tests locally.
  - `test:e2e:ci`: runs tests in CI with the Chromium project.
- Added GitHub Actions workflow `.github/workflows/e2e-tests.yml` that:
  - Triggers on pushes and pull requests to `main`, `production`, and `staging`.
  - Checks out the code, installs dependencies, installs Playwright browsers, and runs the end‑to‑end tests.
  - Fails the workflow if any test fails.
  - Uses `BASE_URL` environment variable to target the correct deployment URL.
- Configured tests to run in CI to ensure regressions are caught early.
- Documented how to run tests locally (`npm run test:e2e`) and in CI (`npm run test:e2e:ci`).

*Adjust the `BASE_URL` environment variable in the CI workflow if your deployment URL differs from `http://localhost:3000` during local testing.*