import { Component, Event, EventEmitter, Listen, State, h } from '@stencil/core';


@Component({
  tag: 'radh-github-search-user-widget',
  styleUrl: 'radh-github-search-user-widget.css'
})
export class RadhGithubSearchUserWidget {

  @State() value: string;

  @State() user: string;

  @Event() userSearched: EventEmitter;

  handleClick() {
    const username = this.value;
    fetch(`https://api.github.com/users/${username}`)
      .then(resp => resp.json())
      .then(user => {
        this.user = JSON.stringify(user);
        this.userSearched.emit(user);
      }
      );
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  @Listen('changed')
  onchanged(ev) {
    this.value = ev.detail;
  }

  render() {

    const user = (() => {
      if (this.user) {
        return (
          <radh-user user={this.user}></radh-user>
        );
      } else {
        return (<p>No data</p>);
      }
    })();

    return (
      <div>
        <radh-input-text label="Username:" name="username"></radh-input-text>
        <radh-button onClick={() => this.handleClick()}>Search</radh-button>
        {user}
      </div>
    );
  }
}
