# OCS 官方文档

## [点击查看](https://kukuqi666.github.io/ocs-docs/) 

如果您有任何的建议可以直接提交PR，或者联系作者邮箱进行文档的整改。

## 关于

网站使用Docusaurus进行构建,详情请参考[Docusaurus](https://docusaurus.io/)

### 安装

```
npm install
```
```
yarn install
```
```
pnpm install
```

### 本地运行

```
npm run start
```
```
yarn run start
```
```
pnpm run start
```

### 部署打包

```
npm run build
```
```
yarn build
```
```
pnpm run build
```

### 测试本地构建

```
npm run serve
```
```
yarn server
```
```
pnpm run server
```

-------------------------------------------------------------------------------------------------------------------------



# Installation


Docusaurus consists of a set of npm [packages](https://github.com/facebook/docusaurus/tree/main/packages).

Use the **[Fast Track](introduction.mdx#fast-track)** to understand Docusaurus in **5 minutes ⏱**!

Use **[docusaurus.new](https://docusaurus.new)** to test Docusaurus immediately in your browser!


## Requirements

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Scaffold project website

The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files.

```bash
npx create-docusaurus@latest my-website classic
```

We recommend the `classic` template so that you can get started quickly, and it contains features found in Docusaurus 1. The `classic` template contains `@docusaurus/preset-classic` which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus.

You can also use the template's TypeScript variant by passing the `--typescript` flag. See [TypeScript support](./typescript-support.mdx) for more information.

```bash
npx create-docusaurus@latest my-website classic --typescript
```

If you are setting up a new Docusaurus website for a Meta open source project, run this command inside an internal repository, which comes with some useful Meta-specific defaults:

```bash
scarf static-docs-bootstrap
```


<details>
  <summary>Alternative installation commands</summary>

You can also initialize a new project using your preferred project manager:

```bash npm2yarn
npm init docusaurus
```

</details>

Run `npx create-docusaurus@latest --help`, or check out its [API docs](./api/misc/create-docusaurus.mdx) for more information about all available flags.

## Project structure

Assuming you chose the classic template and named your site `my-website`, you will see the following files generated under a new directory `my-website/`:

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

### Project structure rundown

- `/blog/` - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the `path` option. More details can be found in the [blog guide](blog.mdx)
- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the `path` option. More details can be found in the [docs guide](./guides/docs/docs-introduction.mdx)
- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing
  - `/src/pages` - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the [pages guide](guides/creating-pages.mdx)
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory
- `/docusaurus.config.js` - A config file containing the site configuration. This is the equivalent of `siteConfig.js` in Docusaurus v1
- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them
- `/sidebars.js` - Used by the documentation to specify the order of documents in the sidebar

### Monorepos

If you are using Docusaurus for documentation of an existing project, a monorepo may be the solution for you. Monorepos allow you to share dependencies between similar projects. For example, your website may use your local packages to showcase latest features instead of depending on a released version. Then, your contributors can update the docs as they implement features. An example monorepo folder structure is below:

```bash
my-monorepo
├── package-a # Another package, your actual project
│   ├── src
│   └── package.json # Package A's dependencies
├── website   # Docusaurus root
│   ├── docs
│   ├── src
│   └── package.json # Docusaurus' dependencies
├── package.json # Monorepo's shared dependencies
```

In this case, you should run `npx create-docusaurus` within the `./my-monorepo` folder.

If you're using a hosting provider such as Netlify or Vercel, you will need to change the `Base directory` of the site to where your Docusaurus root is. In this case, that would be `./website`. Read more about configuring ignore commands in the [deployment docs](./deployment.mdx#deploying-to-netlify).

Read more about monorepos in the [Yarn documentation](https://yarnpkg.com/features/workspaces) (Yarn is not the only way to set up a monorepo, but it's a common solution), or checkout [Docusaurus](https://github.com/facebook/docusaurus) and [Jest](https://github.com/facebook/jest) for some real-world examples.

## Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```bash npm
cd my-website
npm run start
```

```bash yarn
cd my-website
yarn run start
```

```bash pnpm
cd my-website
pnpm run start
```

By default, a browser window will open at [`http://localhost:3000`](http://localhost:3000).

Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available.

## Build

Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:

```bash npm
npm run build
```

```bash yarn
yarn build
```

```bash pnpm
pnpm run build
```
and contents will be generated within the `/build` directory, which can be copied to any static file hosting service like [GitHub pages](https://pages.github.com/), [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Check out the docs on [deployment](deployment.mdx) for more details.

## Updating your Docusaurus version {#updating-your-docusaurus-version}

There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in `package.json` to the desired version. Note that all `@docusaurus/`-namespaced packages should be using the same version.

import UpgradeGuide from '@site/src/components/UpgradeGuide';

<UpgradeGuide />

Then, in the directory containing `package.json`, run your package manager's install command:

```bash npm
npm install
```

```bash yarn
yarn install
```

```bash pnpm
pnpm install
```

`npm install` may report several vulnerabilities and recommend running `npm audit` to address them. Typically, these reported vulnerabilities, such as RegExp DOS vulnerabilities, are harmless and can be safely ignored. Also read this article, which reflects our thinking: [npm audit: Broken by Design](https://overreacted.io/npm-audit-broken-by-design/).


To check that the update occurred successfully, run:

```bash
npx docusaurus --version
```

You should see the correct version as output.

Alternatively, if you are using Yarn, you can do:

```bash
yarn add @docusaurus/core @docusaurus/preset-classic
```


Use new unreleased features of Docusaurus with the [`@canary` npm dist tag](/community/canary)


## Problems?

Ask for help on [Stack Overflow](https://stackoverflow.com/questions/tagged/docusaurus), on our [GitHub repository](https://github.com/facebook/docusaurus), our [Discord server](https://discordapp.com/invite/docusaurus), or [X](https://x.com/docusaurus).













# Deployment

To build the static files of your website for production, run:

```bash npm
npm run build
```

```
yarn build
```

```
pnpm build
```

Once it finishes, the static files will be generated within the `build` directory.


The only responsibility of Docusaurus is to build your site and emit static files in `build`.

It is now up to you to choose how to host those static files.


You can deploy your site to static site hosting services such as [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), [Render](https://render.com/docs/static-sites), and [Surge](https://surge.sh/help/getting-started-with-surge).

A Docusaurus site is statically rendered, and it can generally work without JavaScript!

## Configuration 

The following parameters are required in `docusaurus.config.js` to optimize routing and serve files from the correct location:

| Name | Description |
| --- | --- |
| `url` | URL for your site. For a site deployed at `https://my-org.com/my-project/`, `url` is `https://my-org.com/`. |
| `baseUrl` | Base URL for your project, with a trailing slash. For a site deployed at `https://my-org.com/my-project/`, `baseUrl` is `/my-project/`. |

## Testing your Build Locally

It is important to test your build locally before deploying it for production. Docusaurus provides a [`docusaurus serve`](cli.mdx#docusaurus-serve-sitedir) command for that:

```bash npm
npm run serve
```

```
yarn server
```

```
pnpm run server
```

By default, this will load your site at [`http://localhost:3000/`](http://localhost:3000/).

## Trailing slash configuration

Docusaurus has a [`trailingSlash` config](./api/docusaurus.config.js.mdx#trailingSlash) to allow customizing URLs/links and emitted filename patterns.

The default value generally works fine. Unfortunately, each static hosting provider has a **different behavior**, and deploying the exact same site to various hosts can lead to distinct results. Depending on your host, it can be useful to change this config.



Use [slorber/trailing-slash-guide](https://github.com/slorber/trailing-slash-guide) to understand better the behavior of your host and configure `trailingSlash` appropriately.


## Using environment variables

Putting potentially sensitive information in the environment is common practice. However, in a typical Docusaurus website, the `docusaurus.config.js` file is the only interface to the Node.js environment (see [our architecture overview](advanced/architecture.mdx)), while everything else (MDX pages, React components, etc.) are client side and do not have direct access to the `process` global variable. In this case, you can consider using [`customFields`](api/docusaurus.config.js.mdx#customFields) to pass environment variables to the client side.

```js title="docusaurus.config.js"
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
import 'dotenv/config';

export default {
  title: '...',
  url: process.env.URL, // You can use environment variables to control site specifics as well
  // highlight-start
  customFields: {
    // Put your custom environment here
    teamEmail: process.env.EMAIL,
  },
  // highlight-end
};
```

```jsx title="home.jsx"
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  return <div>Contact us through {customFields.teamEmail}!</div>;
}
```

## Choosing a hosting provider

There are a few common hosting options:

- [Self hosting](#self-hosting) with an HTTP server like Apache2 or Nginx.
- Jamstack providers (e.g. [Netlify](#deploying-to-netlify) and [Vercel](#deploying-to-vercel)). We will use them as references, but the same reasoning can apply to other providers.
- [GitHub Pages](#deploying-to-github-pages) (by definition, it is also Jamstack, but we compare it separately).

If you are unsure of which one to choose, ask the following questions:

<details>

<summary>
  How many resources (money, person-hours, etc.) am I willing to invest in this?
</summary>

- 🔴 Self-hosting requires experience in networking as well as Linux and web server administration. It's the most difficult option, and would require the most time to manage successfully. Expense-wise, cloud services are almost never free, and purchasing/deploying an onsite server can be even more costly.
- 🟢 Jamstack providers can help you set up a working website in almost no time and offer features like server-side redirects that are easily configurable. Many providers offer generous build-time quotas even for free plans that you would almost never exceed. However, free plans have limits, and you would need to pay once you hit those limits. Check the pricing page of your provider for details.
- 🟡 The GitHub Pages deployment workflow can be tedious to set up. (Evidence: see the length of [Deploying to GitHub Pages](#deploying-to-github-pages)!) However, this service (including build and deployment) is always free for public repositories, and we have detailed instructions to help you make it work.

</details>

<details>

<summary>How much server-side customization do I need?</summary>

- 🟢 With self-hosting, you have access to the entire server's configuration. You can configure the virtual host to serve different content based on the request URL, you can do complicated server-side redirects, you can implement authentication, and so on. If you need a lot of server-side features, self-host your website.
- 🟡 Jamstack usually offers some server-side configuration (e.g. URL formatting (trailing slashes), server-side redirects, etc.).
- 🔴 GitHub Pages doesn't expose server-side configuration besides enforcing HTTPS and setting CNAME records.

</details>

<details>

<summary>Do I need collaboration-friendly deployment workflows?</summary>

- 🟡 Self-hosted services can leverage continuous deployment functionality like Netlify, but more heavy-lifting is involved. Usually, you would designate a specific person to manage the deployment, and the workflow wouldn't be very git-based as opposed to the other two options.
- 🟢 Netlify and Vercel have deploy previews for every pull request, which is useful for a team to review work before merging to production. You can also manage a team with different member access to the deployment.
- 🟡 GitHub Pages cannot do deploy previews in a non-convoluted way. One repo can only be associated with one site deployment. On the other hand, you can control who has write access to the site's deployment.

</details>

There isn't a silver bullet. You need to weigh your needs and resources before making a choice.

## Self-Hosting

Docusaurus can be self-hosted using [`docusaurus serve`](cli.mdx#docusaurus-serve-sitedir). Change port using `--port` and `--host` to change host.

```bash npm2yarn
npm run serve -- --build --port 80 --host 0.0.0.0
```


It is not the best option, compared to a static hosting provider / CDN.


In the following sections, we will introduce a few common hosting providers and how they should be configured to deploy Docusaurus sites most efficiently. Docusaurus is not affiliated with any of these services, and this information is provided for convenience only. Some of the write-ups are provided by third-parties, and recent API changes may not be reflected on our side. If you see outdated content, PRs are welcome.

Because we can only provide this content on a best-effort basis only, we have stopped accepting PRs adding new hosting options. You can, however, publish your writeup on a separate site (e.g. your blog, or the provider's official website), and ask us to include a link to your writeup.


## Deploying to Netlify

To deploy your Docusaurus sites to [Netlify](https://www.netlify.com/), first make sure the following options are properly configured:

```js title="docusaurus.config.js"
export default {
  // highlight-start
  url: 'https://docusaurus-2.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  // highlight-end
  // ...
};
```

Then, [create your site with Netlify](https://app.netlify.com/start).

While you set up the site, specify the build commands and directories as follows:

- build command: `npm run build`
- publish directory: `build`

If you did not configure these build options, you may still go to "Site settings" -> "Build & deploy" after your site is created.

Once properly configured with the above options, your site should deploy and automatically redeploy upon merging to your deploy branch, which defaults to `main`.


Some Docusaurus sites put the `docs` folder outside of `website` (most likely former Docusaurus v1 sites):

```bash
repo           # git root
├── docs       # MD files
└── website    # Docusaurus root
```

If you decide to use the `website` folder as Netlify's base directory, Netlify will not trigger builds when you update the `docs` folder, and you need to configure a [custom `ignore` command](https://docs.netlify.com/configure-builds/common-configurations/ignore-builds/):

```toml title="website/netlify.toml"
[build]
  ignore = "git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF . ../docs/"
```


By default, Netlify adds trailing slashes to Docusaurus URLs.

It is recommended to disable the Netlify setting `Post Processing > Asset Optimization > Pretty Urls` to prevent lowercase URLs, unnecessary redirects, and 404 errors.

**Be very careful**: the `Disable asset optimization` global checkbox is broken and does not really disable the `Pretty URLs` setting in practice. Please make sure to **uncheck it independently**.

If you want to keep the `Pretty Urls` Netlify setting on, adjust the `trailingSlash` Docusaurus config appropriately.

Refer to [slorber/trailing-slash-guide](https://github.com/slorber/trailing-slash-guide) for more information.



## Deploying to Vercel

Deploying your Docusaurus project to [Vercel](https://vercel.com/) will provide you with [various benefits](https://vercel.com/) in the areas of performance and ease of use.

To deploy your Docusaurus project with a [Vercel for Git Integration](https://vercel.com/docs/concepts/git), make sure it has been pushed to a Git repository.

Import the project into Vercel using the [Import Flow](https://vercel.com/import/git). During the import, you will find all relevant options preconfigured for you; however, you can choose to change any of these [options](https://vercel.com/docs/build-step#build-&-development-settings).

After your project has been imported, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/platform/deployments#preview), and all changes made to the [Production Branch](https://vercel.com/docs/git-integrations#production-branch) (usually "main" or "master") will result in a [Production Deployment](https://vercel.com/docs/platform/deployments#production).

## Deploying to GitHub Pages

Docusaurus provides an easy way to publish to [GitHub Pages](https://pages.github.com/), which comes free with every GitHub repository.

### Overview

Usually, there are two repositories (at least two branches) involved in a publishing process: the branch containing the source files, and the branch containing the build output to be served with GitHub Pages. In the following tutorial, they will be referred to as **"source"** and **"deployment"**, respectively.

Each GitHub repository is associated with a GitHub Pages service. If the deployment repository is called `my-org/my-project` (where `my-org` is the organization name or username), the deployed site will appear at `https://my-org.github.io/my-project/`. If the deployment repository is called `my-org/my-org.github.io` (the _organization GitHub Pages repo_), the site will appear at `https://my-org.github.io/`.


In case you want to use your custom domain for GitHub Pages, create a `CNAME` file in the `static` directory. Anything within the `static` directory will be copied to the root of the `build` directory for deployment. When using a custom domain, you should be able to move back from `baseUrl: '/projectName/'` to `baseUrl: '/'`, and also set your `url` to your custom domain.

You may refer to GitHub Pages' documentation [User, Organization, and Project Pages](https://help.github.com/en/articles/user-organization-and-project-pages) for more details.


GitHub Pages picks up deploy-ready files (the output from `docusaurus build`) from the default branch (`master` / `main`, usually) or the `gh-pages` branch, and either from the root or the `/docs` folder. You can configure that through `Settings > Pages` in your repository. This branch will be called the "deployment branch".

We provide a `docusaurus deploy` command that helps you deploy your site from the source branch to the deployment branch in one command: clone, build, and commit.

### `docusaurus.config.js` settings

First, modify your `docusaurus.config.js` and add the following params:

| Name | Description |
| --- | --- |
| `organizationName` | The GitHub user or organization that owns the deployment repository. |
| `projectName` | The name of the deployment repository. |
| `deploymentBranch` | The name of the deployment branch. It defaults to `'gh-pages'` for non-organization GitHub Pages repos (`projectName` not ending in `.github.io`). Otherwise, it needs to be explicit as a config field or environment variable. |

These fields also have their environment variable counterparts which have a higher priority: `ORGANIZATION_NAME`, `PROJECT_NAME`, and `DEPLOYMENT_BRANCH`.


GitHub Pages adds a trailing slash to Docusaurus URLs by default. It is recommended to set a `trailingSlash` config (`true` or `false`, not `undefined`).


Example:

```js title="docusaurus.config.js"
export default {
  // ...
  url: 'https://endiliey.github.io', // Your website URL
  baseUrl: '/',
  // highlight-start
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  trailingSlash: false,
  // highlight-end
  // ...
};
```


By default, GitHub Pages runs published files through [Jekyll](https://jekyllrb.com/). Since Jekyll will discard any files that begin with `_`, it is recommended that you disable Jekyll by adding an empty file named `.nojekyll` file to your `static` directory.


### Environment settings

| Name | Description |
| --- | --- |
| `USE_SSH` | Set to `true` to use SSH instead of the default HTTPS for the connection to the GitHub repo. If the source repo URL is an SSH URL (e.g. `git@github.com:facebook/docusaurus.git`), `USE_SSH` is inferred to be `true`. |
| `GIT_USER` | The username for a GitHub account that **has push access to the deployment repo**. For your own repositories, this will usually be your GitHub username. Required if not using SSH, and ignored otherwise. |
| `GIT_PASS` | Personal access token of the git user (specified by `GIT_USER`), to facilitate non-interactive deployment (e.g. continuous deployment) |
| `CURRENT_BRANCH` | The source branch. Usually, the branch will be `main` or `master`, but it could be any branch except for `gh-pages`. If nothing is set for this variable, then the current branch from which `docusaurus deploy` is invoked will be used. |
| `GIT_USER_NAME` | The `git config user.name` value to use when pushing to the deployment repo |
| `GIT_USER_EMAIL` | The `git config user.email` value to use when pushing to the deployment repo |

GitHub enterprise installations should work in the same manner as github.com; you only need to set the organization's GitHub Enterprise host as an environment variable:

| Name          | Description                                     |
| ------------- | ----------------------------------------------- |
| `GITHUB_HOST` | The domain name of your GitHub enterprise site. |
| `GITHUB_PORT` | The port of your GitHub enterprise site.        |

### Deploy

Finally, to deploy your site to GitHub Pages, run:

```mdx-code-block
<Tabs>
<TabItem value="bash" label="Bash">
```

```bash
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

```mdx-code-block
</TabItem>
<TabItem value="windows" label="Windows">
```

```batch
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

```mdx-code-block
</TabItem>
<TabItem value="powershell" label="PowerShell">
```

```powershell
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```

```mdx-code-block
</TabItem>
</Tabs>
```


Beginning in August 2021, GitHub requires every command-line sign-in to use the **personal access token** instead of the password. When GitHub prompts for your password, enter the PAT instead. See the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for more information.

Alternatively, you can use SSH (`USE_SSH=true`) to log in.



### Triggering deployment with GitHub Actions

[GitHub Actions](https://help.github.com/en/actions) allow you to automate, customize, and execute your software development workflows right in your repository.

The workflow examples below assume your website source resides in the `main` branch of your repository (the _source branch_ is `main`), and your [publishing source](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) is configured for [publishing with a custom GitHub Actions Workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow).

Our goal is that:

1. When a new pull request is made to `main`, there's an action that ensures the site builds successfully, without actually deploying. This job will be called `test-deploy`.
2. When a pull request is merged to the `main` branch or someone pushes to the `main` branch directly, it will be built and deployed to GitHub Pages. This job will be called `deploy`.

Here are two approaches to deploying your docs with GitHub Actions. Based on the location of your deployment repository, choose the relevant tab below:

- Source repo and deployment repo are the **same** repository.
- The deployment repo is a **remote** repository, different from the source. Instructions for this scenario assume [publishing source](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) is the `gh-pages` branch.

```mdx-code-block
<Tabs>
<TabItem value="same" label="Same">
```

While you can have both jobs defined in the same workflow file, the original `deploy` workflow will always be listed as skipped in the PR check suite status, which is not indicative of the actual status and provides no value to the review process. We therefore propose to manage them as separate workflows instead.

<details>
<summary>GitHub action files</summary>

Add these two workflow files:


These files assume you are using Yarn. If you use npm, change `cache: yarn`, `yarn install --frozen-lockfile`, `yarn build` to `cache: npm`, `npm ci`, `npm run build` accordingly.

If your Docusaurus project is not at the root of your repo, you may need to configure a [default working directory](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-set-the-default-shell-and-working-directory), and adjust the paths accordingly.


```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      - name: Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    name: Deploy to GitHub Pages
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

```yml title=".github/workflows/test-deploy.yml"
name: Test deployment

on:
  pull_request:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Test build website
        run: yarn build
```

</details>

```mdx-code-block
</TabItem>
<TabItem value="remote" label="Remote">
```

A cross-repo publish is more difficult to set up because you need to push to another repo with permission checks. We will be using SSH to do the authentication.

1. Generate a new [SSH key](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Since this SSH key will be used in CI, make sure to not enter any passphrase.
2. By default, your public key should have been created in `~/.ssh/id_rsa.pub`; otherwise, use the name you've provided in the previous step to add your key to [GitHub deploy keys](https://developer.github.com/v3/guides/managing-deploy-keys/).
3. Copy the key to clipboard with `pbcopy < ~/.ssh/id_rsa.pub` and paste it as a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) in the deployment repository. Copy the file content if the command line doesn't work for you. Check the box for `Allow write access` before saving your deployment key.
4. You'll need your private key as a [GitHub secret](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) to allow Docusaurus to run the deployment for you.
5. Copy your private key with `pbcopy < ~/.ssh/id_rsa` and paste a GitHub secret with the name `GH_PAGES_DEPLOY` on your source repository. Copy the file content if the command line doesn't work for you. Save your secret.
6. Create your [documentation workflow](https://docs.github.com/en/actions/use-cases-and-examples/creating-an-example-workflow) in the `.github/workflows/` directory. In this example it's the `deploy.yml` file.

At this point, you should have:

- the source repo with the GitHub workflow set with the private SSH key as the GitHub Secret, and
- your deployment repo set with the public SSH key in GitHub Deploy Keys.

<details>

<summary>GitHub action file</summary>


Please make sure that you replace `actions@github.com` with your GitHub email and `gh-actions` with your name.

This file assumes you are using Yarn. If you use npm, change `cache: yarn`, `yarn install --frozen-lockfile`, `yarn build` to `cache: npm`, `npm ci`, `npm run build` accordingly.

:::

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  test-deploy:
    if: github.event_name != 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Test build website
        run: yarn build
  deploy:
    if: github.event_name != 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn
      - uses: webfactory/ssh-agent@v0.5.0
        with:
          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}
      - name: Deploy to GitHub Pages
        env:
          USE_SSH: true
        run: |
          git config --global user.email "actions@github.com"
          git config --global user.name "gh-actions"
          yarn install --frozen-lockfile
          yarn deploy
```

</details>

```mdx-code-block
</TabItem>
</Tabs>
```

<details>

<summary>Site not deployed properly?</summary>

After pushing to main, if you don't see your site published at the desired location (for example, it says "There isn't a GitHub Pages site here", or it's showing your repo's README.md file), try the following:

- Wait about three minutes and refresh. It may take a few minutes for GitHub pages to pick up the new files.
- Check your repo's landing page for a little green tick next to the last commit's title, indicating the CI has passed. If you see a cross, it means the build or deployment failed, and you should check the log for more debugging information.
- Click on the tick and make sure you see a "Deploy to GitHub Pages" workflow. Names like "pages build and deployment / deploy" are GitHub's default workflows, indicating your custom deployment workflow failed to be triggered at all. Make sure the YAML files are placed under the `.github/workflows` folder, and that the trigger condition is set correctly (e.g., if your default branch is "master" instead of "main", you need to change the `on.push` property).
- Under your repo's Settings > Pages, make sure the "Source" (which is the source for the _deployment_ files, not "source" as in our terminology) is set to "gh-pages" + "/ (root)", since we are using `gh-pages` as the deployment branch.

If you are using a custom domain:

- Verify that you have the correct DNS records set up if you're using a custom domain. See [GitHub pages documentation on configuring custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages). Also, please be aware that it may take up to 24 hours for DNS changes to propagate through the internet.

</details>

### Triggering deployment with Travis CI

Continuous integration (CI) services are typically used to perform routine tasks whenever new commits are checked in to source control. These tasks can be any combination of running unit tests and integration tests, automating builds, publishing packages to npm, and deploying changes to your website. All you need to do to automate the deployment of your website is to invoke the `yarn deploy` script whenever your website is updated. The following section covers how to do just that using [Travis CI](https://travis-ci.com/), a popular continuous integration service provider.

1. Go to https://github.com/settings/tokens and generate a new [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/). When creating the token, grant it the `repo` scope so that it has the permissions it needs.
2. Using your GitHub account, [add the Travis CI app](https://github.com/marketplace/travis-ci) to the repository you want to activate.
3. Open your Travis CI dashboard. The URL looks like `https://travis-ci.com/USERNAME/REPO`, and navigate to the `More options > Setting > Environment Variables` section of your repository.
4. Create a new environment variable named `GH_TOKEN` with your newly generated token as its value, then `GH_EMAIL` (your email address) and `GH_NAME` (your GitHub username).
5. Create a `.travis.yml` on the root of your repository with the following:

```yml title=".travis.yml"
language: node_js
node_js:
  - 18
branches:
  only:
    - main
cache:
  yarn: true
script:
  - git config --global user.name "${GH_NAME}"
  - git config --global user.email "${GH_EMAIL}"
  - echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
  - yarn install
  - GIT_USER="${GH_NAME}" yarn deploy
```

Now, whenever a new commit lands in `main`, Travis CI will run your suite of tests and if everything passes, your website will be deployed via the `yarn deploy` script.

### Triggering deployment with Buddy

[Buddy](https://buddy.works/) is an easy-to-use CI/CD tool that allows you to automate the deployment of your portal to different environments, including GitHub Pages.

Follow these steps to create a pipeline that automatically deploys a new version of your website whenever you push changes to the selected branch of your project:

1. Go to https://github.com/settings/tokens and generate a new [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/). When creating the token, grant it the `repo` scope so that it has the permissions it needs.
2. Sign in to your Buddy account and create a new project.
3. Choose GitHub as your git hosting provider and select the repository with the code of your website.
4. Using the left navigation panel, switch to the `Pipelines` view.
5. Create a new pipeline. Define its name, set the trigger mode to `On push`, and select the branch that triggers the pipeline execution.
6. Add a `Node.js` action.
7. Add these commands in the action's terminal:

```bash
GIT_USER=<GH_PERSONAL_ACCESS_TOKEN>
git config --global user.email "<YOUR_GH_EMAIL>"
git config --global user.name "<YOUR_GH_USERNAME>"
yarn deploy
```

After creating this simple pipeline, each new commit pushed to the branch you selected deploys your website to GitHub Pages using `yarn deploy`. Read [this guide](https://buddy.works/guides/react-docusaurus) to learn more about setting up a CI/CD pipeline for Docusaurus.

### Using Azure Pipelines

1. Sign Up at [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) if you haven't already.
2. Create an organization. Within the organization, create a project and connect your repository from GitHub.
3. Go to https://github.com/settings/tokens and generate a new [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) with the `repo` scope.
4. In the project page (which looks like `https://dev.azure.com/ORG_NAME/REPO_NAME/_build`), create a new pipeline with the following text. Also, click on edit and add a new environment variable named `GH_TOKEN` with your newly generated token as its value, then `GH_EMAIL` (your email address) and `GH_NAME` (your GitHub username). Make sure to mark them as secret. Alternatively, you can also add a file named `azure-pipelines.yml` at your repository root.

```yml title="azure-pipelines.yml"
trigger:
  - main

pool:
  vmImage: ubuntu-latest

steps:
  - checkout: self
    persistCredentials: true

  - task: NodeTool@0
    inputs:
      versionSpec: '18'
    displayName: Install Node.js

  - script: |
      git config --global user.name "${GH_NAME}"
      git config --global user.email "${GH_EMAIL}"
      git checkout -b main
      echo "machine github.com login ${GH_NAME} password ${GH_TOKEN}" > ~/.netrc
      yarn install
      GIT_USER="${GH_NAME}" yarn deploy
    env:
      GH_NAME: $(GH_NAME)
      GH_EMAIL: $(GH_EMAIL)
      GH_TOKEN: $(GH_TOKEN)
    displayName: Install and build
```

### Using Drone

1. Create a new SSH key that will be the [deploy key](https://docs.github.com/en/free-pro-team@latest/developers/overview/managing-deploy-keys#deploy-keys) for your project.
2. Name your private and public keys to be specific and so that it does not overwrite your other [SSH keys](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).
3. Go to `https://github.com/USERNAME/REPO/settings/keys` and add a new deploy key by pasting in the public key you just generated.
4. Open your Drone.io dashboard and log in. The URL looks like `https://cloud.drone.io/USERNAME/REPO`.
5. Click on the repository, click on activate repository, and add a secret called `git_deploy_private_key` with your private key value that you just generated.
6. Create a `.drone.yml` on the root of your repository with the below text.

```yml title=".drone.yml"
kind: pipeline
type: docker
trigger:
  event:
    - tag
- name: Website
  image: node
  commands:
    - mkdir -p $HOME/.ssh
    - ssh-keyscan -t rsa github.com >> $HOME/.ssh/known_hosts
    - echo "$GITHUB_PRIVATE_KEY" > "$HOME/.ssh/id_rsa"
    - chmod 0600 $HOME/.ssh/id_rsa
    - cd website
    - yarn install
    - yarn deploy
  environment:
    USE_SSH: true
    GITHUB_PRIVATE_KEY:
      from_secret: git_deploy_private_key
```

Now, whenever you push a new tag to GitHub, this trigger will start the drone CI job to publish your website.

## Deploying to Flightcontrol

[Flightcontrol](https://www.flightcontrol.dev/?ref=docusaurus) is a service that automatically builds and deploys your web apps to AWS Fargate directly from your Git repository. It gives you full access to inspect and make infrastructure changes without the limitations of a traditional PaaS.

Get started by following [Flightcontrol's step-by-step Docusaurus guide](https://www.flightcontrol.dev/docs/reference/examples/docusaurus/?ref=docusaurus).

## Deploying to Koyeb

[Koyeb](https://www.koyeb.com) is a developer-friendly serverless platform to deploy apps globally. The platform lets you seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery. Check out the [Koyeb's Docusaurus deployment guide](https://www.koyeb.com/tutorials/deploy-docusaurus-on-koyeb) to get started.

## Deploying to Render

[Render](https://render.com) offers [free static site hosting](https://render.com/docs/static-sites) with fully managed SSL, custom domains, a global CDN, and continuous auto-deploy from your Git repo. Get started in just a few minutes by following [Render's guide to deploying Docusaurus](https://render.com/docs/deploy-docusaurus).

## Deploying to Qovery

[Qovery](https://www.qovery.com) is a fully-managed cloud platform that runs on your AWS, Digital Ocean, and Scaleway account where you can host static sites, backend APIs, databases, cron jobs, and all your other apps in one place.

1. Create a Qovery account. Visit the [Qovery dashboard](https://console.qovery.com) to create an account if you don't already have one.
2. Create a project.
   - Click on **Create project** and give a name to your project.
   - Click on **Next**.
3. Create a new environment.
   - Click on **Create environment** and give a name (e.g. staging, production).
4. Add an application.
   - Click on **Create an application**, give a name and select your GitHub or GitLab repository where your Docusaurus app is located.
   - Define the main branch name and the root application path.
   - Click on **Create**. After the application is created:
   - Navigate to your application **Settings**
   - Select **Port**
   - Add port used by your Docusaurus application
5. Deploy
   - All you have to do now is to navigate to your application and click on **Deploy**.

![Deploy the app](https://hub.qovery.com/img/heroku/heroku-1.png)

That's it. Watch the status and wait till the app is deployed. To open the application in your browser, click on **Action** and **Open** in your application overview.

## Deploying to Hostman

[Hostman](https://hostman.com/) allows you to host static websites for free. Hostman automates everything, you just need to connect your repository and follow these easy steps:

1. Create a service.

   - To deploy a Docusaurus static website, click **Create** in the top-left corner of your [Dashboard](https://dashboard.hostman.com/) and choose **Front-end app or static website**.

2. Select the project to deploy.

   - If you are logged in to Hostman with your GitHub, GitLab, or Bitbucket account, you will see the repository with your projects, including the private ones.

   - Choose the project you want to deploy. It must contain the directory with the project's files (e.g. `website`).

   - To access a different repository, click **Connect another repository**.

   - If you didn't use your Git account credentials to log in, you'll be able to access the necessary account now, and then select the project.

3. Configure the build settings.

   - Next, the **Website customization** window will appear. Choose the **Static website** option from the list of frameworks.

   - The **Directory with app** points at the directory that will contain the project's files after the build. If you selected the repository with the contents of the website (or `my_website`) directory during Step 2, you can leave it empty.

   - The standard build command for Docusaurus is:

     ```bash npm2yarn
     npm run build
     ```

   - You can modify the build command if needed. You can enter multiple commands separated by `&&`.

4. Deploy.

   - Click **Deploy** to start the build process.

   - Once it starts, you will enter the deployment log. If there are any issues with the code, you will get warning or error messages in the log specifying the cause of the problem. Usually, the log contains all the debugging data you'll need.

   - When the deployment is complete, you will receive an email notification and also see a log entry. All done! Your project is up and ready.

## Deploying to Surge

Surge is a [static web hosting platform](https://surge.sh/help/getting-started-with-surge) that you can use to deploy your Docusaurus project from the command line in seconds. Deploying your project to Surge is easy and free (including custom domains and SSL certs).

Deploy your app in a matter of seconds using Surge with the following steps:

1. First, install Surge using npm by running the following command:
   ```bash npm2yarn
   npm install -g surge
   ```
2. To build the static files of your site for production in the root directory of your project, run:
   ```bash npm2yarn
   npm run build
   ```
3. Then, run this command inside the root directory of your project:
   ```bash
   surge build/
   ```

First-time users of Surge would be prompted to create an account from the command line (which happens only once).

Confirm that the site you want to publish is in the `build` directory. A randomly generated subdomain `*.surge.sh subdomain` is always given (which can be edited).

### Using your domain {#using-your-domain}

If you have a domain name you can deploy your site using the command:

```bash
surge build/ your-domain.com
```

Your site is now deployed for free at `subdomain.surge.sh` or `your-domain.com` depending on the method you chose.

### Setting up CNAME file

Store your domain in a CNAME file for future deployments with the following command:

```bash
echo subdomain.surge.sh > CNAME
```

You can deploy any other changes in the future with the command `surge`.

## Deploying to Stormkit

You can deploy your Docusaurus project to [Stormkit](https://www.stormkit.io), a deployment platform for static websites, single-page applications (SPAs), and serverless functions. For detailed instructions, refer to this [guide](https://www.stormkit.io/blog/how-to-deploy-docusarous).

## Deploying to QuantCDN

1. Install [Quant CLI](https://docs.quantcdn.io/docs/cli/get-started)
2. Create a QuantCDN account by [signing up](https://dashboard.quantcdn.io/register)
3. Initialize your project with `quant init` and fill in your credentials:
   ```bash
   quant init
   ```
4. Deploy your site.
   ```bash
   quant deploy
   ```

See [docs](https://docs.quantcdn.io/docs/cli/continuous-integration) and [blog](https://www.quantcdn.io/blog) for more examples and use cases for deploying to QuantCDN.

## Deploying to Layer0
[Layer0](https://www.layer0.co) is an all-in-one platform to develop, deploy, preview, experiment on, monitor, and run your headless frontend. It is focused on large, dynamic websites and best-in-class performance through EdgeJS (a JavaScript-based Content Delivery Network), predictive prefetching, and performance monitoring. Layer0 offers a free tier. Get started in just a few minutes by following [Layer0's guide to deploying Docusaurus](https://docs.layer0.co/guides/docusaurus).

## Deploying to Cloudflare Pages

[Cloudflare Pages](https://pages.cloudflare.com/) is a Jamstack platform for frontend developers to collaborate and deploy websites. Get started within a few minutes by following [this article](https://dev.to/apidev234/deploying-docusaurus-to-cloudflare-pages-565g).

## Deploying to Azure Static Web Apps

[Azure Static Web Apps](https://docs.microsoft.com/en-us/azure/static-web-apps/overview) is a service that automatically builds and deploys full-stack web apps to Azure directly from the code repository, simplifying the developer experience for CI/CD. Static Web Apps separates the web application's static assets from its dynamic (API) endpoints. Static assets are served from globally-distributed content servers, making it faster for clients to retrieve files using servers nearby. Dynamic APIs are scaled with serverless architectures using an event-driven functions-based approach that is more cost-effective and scales on demand. Get started in a few minutes by following [this step-by-step guide](https://dev.to/azure/11-share-content-with-docusaurus-azure-static-web-apps-30hc).

## Deploying to Kinsta

[Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting) lets you deploy up to 100 static sites for free, custom domains with SSL, 100 GB monthly bandwidth, and 260+ Cloudflare CDN locations.

Get started in just a few clicks by following our [Docusaurus on Kinsta](https://kinsta.com/docs/docusaurus-example/) article.
