import { Component, h } from '@stencil/core';


@Component({
    tag: 'radh-url-code',
    styleUrl: 'radh-url-code.css'
})
export class RadhUrlCode {



    render() {
        return (
            <div>
                <a href="https://leanpub.com/angular-guia-practica/c/CODE-DEVUI-AUTENTIA">
                    https://leanpub.com/angular-guia-practica/c/CODE-DEVUI-AUTENTIA
                </a>
            </div>
        );
    }
}
