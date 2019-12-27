import { Component, h } from '@stencil/core';


@Component({
    tag: 'radh-layout-center',
    styleUrl: 'radh-layout-center.css'
})
export class RadhLayoutCenter {



    render() {
        return (
            <div class="flex-container">
                <div class="row">
                    <div class="flex-item"><slot></slot></div>
                </div>
            </div>
        );
    }
}
