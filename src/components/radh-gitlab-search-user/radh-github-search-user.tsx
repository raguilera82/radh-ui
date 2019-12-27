import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  State
} from "@stencil/core";

@Component({
  tag: "radh-github-search-user",
  styleUrl: "radh-github-search-user.css"
})
export class RadhGithubSearchUser {
  @State() value: string;

  @Event() userSearched: EventEmitter;

  handleClick() {
    const username = this.value;
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(user => this.userSearched.emit(user));
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  @Listen("changed")
  onchanged(ev) {
    this.value = ev.detail;
  }

  render() {
    return (
      <div>
        <radh-input-text label="Username:" name="username" />
        <radh-button onClick={() => this.handleClick()}>Search</radh-button>
      </div>
    );
  }
}
