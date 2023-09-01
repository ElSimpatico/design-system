import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ui-helloworld',
  styleUrl: 'hello-world.scss',
  shadow: false,
  scoped: true,
})
export class HelloWorld {
  /**
   * The first name
   */
  @Prop() firstName: string = 'World';

  render() {
    return (
      <Host>
        <div>{`Hello${this.firstName ? `, ${this.firstName}` : ''}!`}</div>
      </Host>
    );
  }
}
