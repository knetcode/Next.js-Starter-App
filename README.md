# NextJS Starter App

### Important info

-  This is not a deployed app, this is meant to be the bolierplate starting point for new apps.
-  Please copy this and edit based on new project requirements, most Shoprite security features are built-in already.
-  CSP rules are different for dev environment vs prod environment, these are controlled in `/pages/_document.tsx`
-  Any page the calls an API, must have the following line at the bottom in order to comply with Shoprite's CSRF security requirements. Static pages do not require this  
   `export const getServerSideProps = setup(async () => ({ props: {} }))`
-  App uses something like a personal framework, please check `/styles/colors.ts` and `/styles/globalStyles.ts` for some global preset values. You can find some universal components in `/components/utils/` directory.
-  Fonts need to be included locally to fully comply with Shoprite's security issues.
-  When communicating with an external API, first write a "middle man" API within NextJS for extra security, these are written in `/pages/api/`.
-  This is a [NextJS](https://nextjs.org/docs) app, which is a meta-framework for [ReactJS](https://reactjs.org/docs/getting-started.html)
-  The app is written with [TypeScript](https://www.typescriptlang.org/docs/), rules are defined in `/tsconfig.json`
-  The app is linted with [ESLint](https://eslint.org/docs/latest/), rules are defined in `/.eslintrc.js`
-  Global variables, such as polling rate and debounce values are stored in `/lib/constants.ts`
-  Global helper functions, such as date formatters are stored in `/lib/helperFunctions.ts`
-  Regex models are stored in `/models/regexModels.ts`
-  NextJS server settings can be configured in `/next-config.js`

---

### Commands

-  `npm run dev` Start dev server on port 3000
-  `npm run build` Creates production build
-  `npm run start` Starts production server on port 3000
-  `npm run lint` Runs ESLint to ensure code follows best practises
