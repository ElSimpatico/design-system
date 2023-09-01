import mdx from './hello-world.mdx';

export default {
  title: 'Components/Atoms/Hello World',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Template = args => `<ui-helloworld first-name="${args.firstName}"></ui-helloworld>`;

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  firstName: 'Pepito',
};
HelloWorld.argTypes = {};
