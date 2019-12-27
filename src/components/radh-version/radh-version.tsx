import { Component, h } from "@stencil/core";
import { version } from './version';

@Component({
  tag: "radh-version",
  styleUrl: "radh-version.css",
  shadow: true
})
export class RadhVersion {
  render() {
    return <div>{version}</div>;
  }
}
