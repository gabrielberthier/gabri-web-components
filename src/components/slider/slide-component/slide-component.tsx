import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'slide-component',
  styleUrl: 'slide-component.css',
  shadow: true,
})
export class SlideComponent {
  @Prop() src: string;

  render() {
    return (
      <Host class="slide">
        <slot></slot>
      </Host>
    );
  }
}
