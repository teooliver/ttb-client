# TODO:

#### Frontend

- Fix Dockerfile/docker-compose
- Add tests to `ProjectSelect` and `StopWatch`
- Add add mockup backend test implementation so we can use the app without the backend and run tests.
- Add storybook and maybe storyshot testing using playwright?
- Add `husky` end configure git hooks for commits, merge and push
- Fix Header styles on storybook
- Redo all tests using jest and Playwright with MSW.
- Add pagination to Reports chart (choose spefic start/end dates or previous/next week buttons).
- Add modal asking the user if its first the first time in the app.
  Setup cookies to show/hide cookie base on user response. Good for writing diferent types of tests based on cookies.
- Extract Wrapper component in tests to jest config
- ~~Should I keep using MSW or just mock fetch requests as normal?~~ (YES)
- ~~Add Spinner for loading states.~~
- ~~Implement `load more` in Timer page using `useInfiniteQuery`.~~

# KNOWN BUGS: