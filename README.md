# React 18/Typescript/Webpack Starter Project 

<!-- ABOUT THE PROJECT -->
## About
React 18/Tyjapscript/Webpack Starter project.   
Includes the following:
- Webpack for bundling, development server and hot module replacement.
- Webpack config file splitting (common, dev, prod).
- Use Webpack config file for .env variables (using Define plugin)
- TypeScript integration using Webpack's ts-loader module.
- React 18 release candidate. 
- React router v6.
- Predefined src-folder structure, component template
- Jest unit test setup.
- eslint config (4-tab, Google styleguide)
- i18next: translations in translations/translations.json, use keys using useTranslate hook.

## Firebase setup

1. Make sure latest version of Firebase CLI is installed on your machine:
`npm install -g firebase-tools`

2. Login to your firebase account.

3. In the project folder run `firebase init` and select the following items:
    a. Firestore (security rules and index file for the database)
    b. Functions (backend/server side functions)
    c. Hosting (configure files for Firebase hosting, do not select Github action deploys item)
    d. Storage (setup security rules file for Firebase storage)
4. Choose project name and id and then follow dialog (choose default values, emulators: firestore, storage, hosting, functions, authentication)

As a result the follwoing files folders are created by `firebase init`:
	.firebaserc: Firebase project name
	firebase.json: Settings for different firebase modules
	firestore.indexes.json
	firestore.rules: Firestore security rules
	functions/: Backend project (Typescript, can share types with frontend)
	public/: Output for hosting
	storage.rules: Storage security rules

=> Deployment through `firebase deploy` (Blaze plan required, don't forget to setup budget alert, deploys /dist to www-root)
TODO: ensure cloud functions are on Europe-West-6
TODO: npm run dev-seed/update-seed

## TODO
- Jest React component tests (snapshot, react test library)
- Uglify/minify
- robots.txt file for dist (copy plugin)
- usage of repo (how to create new project)
- make_component.sh