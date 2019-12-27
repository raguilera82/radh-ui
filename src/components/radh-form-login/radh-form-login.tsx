import { Component, h } from '@stencil/core';


@Component({
    tag: 'radh-form-login',
    styleUrl: 'radh-form-login.css'
})
export class RadhFormLogin {



    render() {
        return (
            <slot></slot>
        );
    }
}
