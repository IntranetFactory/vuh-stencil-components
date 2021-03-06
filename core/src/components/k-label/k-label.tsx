import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-label',
  styleUrl: 'k-label.scss',
  shadow: true
})
export class KLabel {
  render() {
    return (
      <label class="KLabel">
        <slot></slot>
      </label>
    );
  }
}
