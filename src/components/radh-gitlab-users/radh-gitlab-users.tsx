import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  State
} from "@stencil/core";

interface UserData {
  login: string;
  avatar_url: string;
}

@Component({
  tag: "radh-gitlab-users",
  styleUrl: "radh-gitlab-users.css"
})
export class RadhGitlabUsers {
  @State() userData: UserData[];

  @Event({
    bubbles: true
  })
  toasted: EventEmitter;

  @Listen("selected")
  getUserSelected(ev) {
    this.toasted.emit(ev.detail);
  }

  fetchGitLabUsers() {
    fetch("/assets/data/users.json")
      .then(resp => resp.json())
      .then(data => (this.userData = data));
  }

  componentWillLoad() {
    this.fetchGitLabUsers();
  }

  render() {
    if (!this.userData) {
      return null;
    }
    return [
      <radh-fluid-grid>
        {this.userData.map(user => (
          <radh-user avatar user={JSON.stringify(user)} />
        ))}
      </radh-fluid-grid>
    ];
  }
}
