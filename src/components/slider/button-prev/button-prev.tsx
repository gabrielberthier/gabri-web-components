import { Component, Host, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'button-prev',
  styleUrl: 'button-prev.css',
  shadow: true,
})
export class ButtonPrev {
  @Event({
    eventName: 'prevSlide',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  slider: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button class="btn btn-prev" onClick={() => this.slider.emit()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
            />
          </svg>
        </button>
      </Host>
    );
  }
}
