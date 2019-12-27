import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
  State,
  Watch
} from "@stencil/core";
import { User } from "./model";

@Component({
  tag: "radh-user",
  styleUrl: "radh-user.css",
  shadow: false
})
export class RadhUser {
  @Prop({
    reflectToAttr: true
  })
  user: string;
  @State() innerUser: User;

  @Prop() avatar: boolean;

  @Event({
    bubbles: true
  })
  selected: EventEmitter;

  @Listen("click")
  click() {
    this.selected.emit(this.innerUser);
  }

  @Watch("user")
  parseUserProp(newValue: string) {
    if (newValue) this.innerUser = JSON.parse(newValue);
  }

  @Method()
  async setUser(user: User) {
    this.innerUser = user;
  }

  componentWillLoad() {
    this.parseUserProp(this.user);
  }

  render() {
    const avatar = (() => {
      if (this.avatar) {
        return (
          <blaze-avatar
            size="super"
            alt="placeholder"
            src={this.innerUser.avatar_url}
          />
        );
      } else {
        return <img src={this.innerUser.avatar_url} />;
      }
    })();

    if (this.innerUser) {
      return (
        <blaze-card>
          <blaze-card-body>{avatar}</blaze-card-body>
          <blaze-card-footer>
            <h4 class="login">{this.innerUser.login}</h4>
            <p class="name">{this.innerUser.name}</p>
          </blaze-card-footer>
        </blaze-card>
      );
    }
  }
}
