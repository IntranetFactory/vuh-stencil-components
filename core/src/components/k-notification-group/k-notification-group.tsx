import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-notification-group',
  styleUrl: 'k-notification-group.scss',
  shadow: true
})
export class KNotificationGroup {
  render() {
    return (
      <Host class="KNotificationGroup">
        <slot></slot>
      </Host>
    );
  }
}
