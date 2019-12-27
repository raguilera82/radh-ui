import { Component, Element, h, Method, State } from "@stencil/core";

@Component({
  tag: "radh-toast",
  styleUrl: "radh-toast.css"
})
export class RadhToast {
  @Element() element: HTMLElement;

  @State() desc: string;

  @Method()
  async launchToast(desc: string) {
    this.desc = desc;
    var toast = this.element.querySelector("#toast");
    toast.className = "show";
    setTimeout(function() {
      toast.className = toast.className.replace("show", "");
    }, 5000);
  }

  render() {
    return (
      <div id="toast">
        <div id="img">Icon</div>
        <div id="desc">{this.desc}</div>
      </div>
    );
  }
}
