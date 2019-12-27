declare var firebase: firebase.app.App;

import { Component, Event, EventEmitter, h, State } from "@stencil/core";
import { authState } from "rxfire/auth";

@Component({
  tag: "radh-auth",
  styleUrl: "radh-auth.css"
})
export class RadhAuth {
  @State() user: any;

  @Event() userInfo: EventEmitter;

  componentWillLoad() {
    authState(firebase.auth()).subscribe(u => {
      this.user = u;
      this.userInfo.emit(u);
    });
  }

  login() {
    const provider = new (firebase.auth as any).GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    if (this.user) {
      return (
        <div>
          You are logged is as {this.user.displayName}
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <radh-button onClick={this.login}>Login with Google</radh-button>
        </div>
      );
    }
  }
}
