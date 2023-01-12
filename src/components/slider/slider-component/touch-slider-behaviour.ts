import { SliderComponent } from './slider-component';

export class TouchSlideBehaviour {
  private isDragging = false;
  private startPos = 0;
  private currentTranslate = 0;
  private prevTranslate = 0;
  private animationID: number;
  private currentIndex = 0;
  private slides: Element[];
  private sliderContainer: HTMLElement;

  constructor(private readonly sliderComponent: SliderComponent) {
    const { slides, sliderContainer } = this.sliderComponent;

    this.slides = slides;
    this.sliderContainer = sliderContainer;
  }

  private notifyOnIndexChange(index: number) {
    this.sliderComponent.updateIndex(index);
  }

  updateIndex(index: number) {
    this.currentIndex = index;
  }

  apply() {
    this.prepareContainer();
    this.slides.forEach((slide, index) => {
      // const slideImage = slide.shadowRoot.querySelector('img');
      // disable default image drag
      slide.addEventListener('dragstart', e => e.preventDefault());
      // pointer events
      slide.addEventListener('pointerdown', (evet: PointerEvent) => {
        this.notifyOnIndexChange(index);

        this.startPos = evet.clientX;
        console.log('StartPos', this.startPos);

        this.isDragging = true;
        this.sliderContainer.classList.add('grabbing');
        this.animationID = requestAnimationFrame(this.animation.bind(this));
      });
      slide.addEventListener('pointerup', () => {
        console.log('Pointerup at poiterup');
        this.pointerUp();
      });
      slide.addEventListener('pointerleave', () => {
        console.log('Pointerup at pointerleave');
        this.pointerUp();
      });

      slide.addEventListener('pointermove', (e: PointerEvent) => {
        console.log('PointerMove called');
        this.pointerMove(e);
      });
    });
  }

  private prepareContainer() {
    this.sliderContainer.addEventListener('resize', () => {
      this.setPositionByIndex();
    });

    // prevent menu popup on long press
    this.sliderContainer.oncontextmenu = function (event: Event) {
      event.preventDefault();
      event.stopPropagation();

      return false;
    };
  }

  private pointerMove(event: PointerEvent) {
    if (this.isDragging) {
      console.log('Is dragging');

      const currentPosition = event.clientX;
      this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
    }
  }

  private pointerUp() {
    cancelAnimationFrame(this.animationID);
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;

    console.log(`MovedBy ${movedBy}, PrevTranslate: ${this.prevTranslate},CurrentTranslate: ${this.currentTranslate}`);

    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
      this.currentIndex += 1;
    }

    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && this.currentIndex > 0) this.currentIndex -= 1;
    this.sliderContainer.classList.remove('grabbing');

    if (movedBy) {
      this.setPositionByIndex();
    }
  }

  private setSliderPosition() {
    this.slides.forEach((slide: HTMLElement, indx) => {
      const currentIndexedPosition = 100 * indx;

      const translate = `translateX(${this.currentTranslate + currentIndexedPosition}%)`;

      console.log(translate);

      slide.style.transform = translate;
    });
  }

  private animation() {
    this.setSliderPosition();

    if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
  }

  private setPositionByIndex() {
    this.currentTranslate = -this.currentIndex * 100;
    this.prevTranslate = this.currentTranslate;
    this.setSliderPosition();
  }
}
