# TODO:

#### Frontend

- Use react-query with Nextjs properly. (Define the best strategy (SSR - CSR etc))
- add fake "auth" (simple user/password form to ilustrate the flow and write tests)
- add validation to "fake" auth
- after auth navigate user to previous page (insteaf of home)
  Setup cookies to show/hide elements base on user privacy response. Good for writing diferent types of tests based on cookies.
- Run Playwright and Storybook in Docker
- Add ci test pipelines
- Add tests to `ProjectSelect` and `StopWatch`
- Add add mockup backend test implementation so we can use the app without the backend and run tests.
- Add storyshot testing using playwright?
- Redo all tests using jest and Playwright with MSW.
- Add pagination to Reports chart (choose spefic start/end dates or previous/next week buttons).
- Add modal asking the user if its first the first time in the app.
- Extract Wrapper component in tests to jest config
- add favicon
- Check XState and StateMachines
- ~~Add `husky` end configure git hooks for commits, merge and push~~
- ~~Should I keep using MSW or just mock fetch requests as normal?~~ (YES)
- ~~Add Spinner for loading states.~~
- ~~Implement `load more` in Timer page using `useInfiniteQuery`.~~
- ~~fix Dockerfile/docker-compose~~

# KNOWN BUGS:

- ~~Edtiable Input Header changes heigh and widht when in editing mode.~~
- Double check React Query impls, kind of slow at the moment.

# GENERAL:

- ? Add vscode settings and launch configs ?
