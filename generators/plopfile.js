module.exports = function (plop) {
    // component generator
    plop.setGenerator('component', {
        description: 'application component logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'plop-templates/component.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.ts',
                templateFile: 'plop-templates/stories.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'plop-templates/styles.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.tsx',
                templateFile: 'plop-templates/test.hbs'
            },
        ]
    });
};