import { Component, Host, h, Element, Prop, State, Listen } from '@stencil/core';
import { TouchSlideBehaviour } from './touch-slider-behaviour';

@Component({
  tag: 'slider-component',
  styleUrl: 'slider-component.css',
  shadow: true,
})
export class SliderComponent {
  @Element() el: HTMLElement;
  @Prop() showStatus: boolean = false;
  @State() currentSlideNumber: number = 0;
  private slidesCount: number = 0;
  private _slides: Element[];
  private slider: HTMLElement;
  private touchBehaviour: TouchSlideBehaviour;

  updateIndex(index: number) {
    this.currentSlideNumber = index;
    this.touchBehaviour.updateIndex(index);
  }

  componentDidLoad() {
    this.slider = this.el.shadowRoot.querySelector('.slider');

    this._slides = Array.from(this.el.children);

    this.slidesCount = this._slides.length;

    this._slides.forEach((slide: HTMLElement, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });

    this.touchBehaviour = new TouchSlideBehaviour(this);

    this.touchBehaviour.apply();
  }

  get threshold() {
    return this.slidesCount - 1;
  }

  @Listen('prevSlide')
  movePrev() {
    this.updateIndex(this.currentSlideNumber === 0 ? this.threshold : this.currentSlideNumber - 1);

    this.moveSlides();
  }

  @Listen('nextSlide')
  moveNext() {
    this.updateIndex(this.currentSlideNumber === this.threshold ? 0 : this.currentSlideNumber + 1);

    this.moveSlides();
  }

  moveSlides() {
    this._slides.forEach((slide: HTMLElement, indx) => {
      slide.style.transform = `translateX(${100 * (indx - this.currentSlideNumber)}%)`;
    });
  }

  get slides() {
    return this._slides;
  }
  get sliderContainer() {
    return this.slider;
  }

  render() {
    return (
      <Host>
        <div class="container-slide">
          <div class="slider">
            <slot></slot>
            <button-next></button-next>
            <button-prev></button-prev>
          </div>
        </div>
      </Host>
    );
  }
}
