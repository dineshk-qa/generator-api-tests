# generator-api-tests
> **generator for Api functional tests boilerplate with TS/JS**

### Project brief
 - This boilerplate uses SuperTest and Jest as core modules to carry out the api endpoint validations.  
 - Flexibity to create the boilerplate in typescript or javascript.
 - This sample project comes with **1 test spec, data, util, helpers and CI Pipeline** etc. which should be good guide and  foundation to understand the framework and add your own test scripts. Happy Coding :-) 
 
### Installation

- Install [Yeoman](http://yeoman.io) globally
```bash
npm install -g yo
```
- Install generator-api-tests globally

```bash
npm install -g @zen-qa/generator-api-tests
```

### Generate boilerplate
generate your new api automation test project at either in independent repo or within your existing team project:

```bash
cd to/parent/directory
yo @zen-qa/api-tests
```
#### Options during installation

- **Name of the project** - default is `api.tests`, however you can input any name. A directory is created with the same name and boilerplate code will be generated inside that
- **TypeScript/JavaScript** - This generator gives the flexibity to create the boilerplate in typescript or javascript. 
- **Good to go** - The dependencies for the new project are already installed and you can run `test:api:sandbox` to run a sample tests! 
