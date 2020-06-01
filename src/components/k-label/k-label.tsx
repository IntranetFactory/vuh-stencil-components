import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "k-label",
  styleUrl: "k-label.scss",
})
export class Label {
  @Prop() htmlfor: string;

  render() {
    return <label htmlfor={this.htmlfor}>This is a label</label>;
  }
}
