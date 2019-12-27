import { Component, Element, h, Prop } from '@stencil/core';


@Component({
    tag: 'radh-lazy-img',
    styleUrl: 'radh-lazy-img.css',
    shadow: true
})
export class RadhLazyImg {

    @Element() el: HTMLElement;

    @Prop() imgSrc: string;

    @Prop() time: number;

    private observer: IntersectionObserver;

    async componentDidLoad() {
        const img: HTMLImageElement = this.el.shadowRoot.querySelector('img');

        if (!this.time) {
            this.time = 0;
        }

        if (img) {
            setTimeout(() => {
                this.observer = new IntersectionObserver(this.onIntersection, { rootMargin: '100px 0px' });
                this.observer.observe(img);
            }, this.time);
        }
    }

    private onIntersection = async (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                if (this.observer) {
                    this.observer.disconnect();
                }

                if (entry.target.getAttribute('data-src')) {
                    console.log(entry.target.getAttribute('data-src'));
                    entry.target.setAttribute('src', entry.target.getAttribute('data-src'));
                    entry.target.removeAttribute('data-src');
                }
            }
        }
    };

    render() {
        return <img data-src={this.imgSrc} src="assets/imgs/dummy-off.png" />;
    }
}
