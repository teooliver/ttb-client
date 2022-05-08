# TODO:

#### Frontend

- test actions
- add fake auth (simple user/password form to ilustrate the flow)
- Run Playwright and Storybook in Docker
- Add `husky` end configure git hooks for commits, merge and push
- Add ci test pipelines
- Add tests to `ProjectSelect` and `StopWatch`
- Add add mockup backend test implementation so we can use the app without the backend and run tests.
- Add storybook and maybe storyshot testing using playwright?
- Redo all tests using jest and Playwright with MSW.
- Add pagination to Reports chart (choose spefic start/end dates or previous/next week buttons).
- Add modal asking the user if its first the first time in the app.
  Setup cookies to show/hide cookie base on user response. Good for writing diferent types of tests based on cookies.
- Extract Wrapper component in tests to jest config
- ~~Should I keep using MSW or just mock fetch requests as normal?~~ (YES)
- ~~Add Spinner for loading states.~~
- ~~Implement `load more` in Timer page using `useInfiniteQuery`.~~
- ~~fix Dockerfile/docker-compose~~
- add favicon
- Double check React Query impls, kind of slow at the moment.
- Check XState and StateMachines

# KNOWN BUGS:

- ~~Edtiable Input Header changes heigh and widht when in editing mode.~~
