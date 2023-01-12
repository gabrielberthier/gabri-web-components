/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonNext {
    }
    interface ButtonPrev {
    }
    interface SlideComponent {
        "src": string;
    }
    interface SliderComponent {
        "showStatus": boolean;
    }
}
export interface ButtonNextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLButtonNextElement;
}
export interface ButtonPrevCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLButtonPrevElement;
}
declare global {
    interface HTMLButtonNextElement extends Components.ButtonNext, HTMLStencilElement {
    }
    var HTMLButtonNextElement: {
        prototype: HTMLButtonNextElement;
        new (): HTMLButtonNextElement;
    };
    interface HTMLButtonPrevElement extends Components.ButtonPrev, HTMLStencilElement {
    }
    var HTMLButtonPrevElement: {
        prototype: HTMLButtonPrevElement;
        new (): HTMLButtonPrevElement;
    };
    interface HTMLSlideComponentElement extends Components.SlideComponent, HTMLStencilElement {
    }
    var HTMLSlideComponentElement: {
        prototype: HTMLSlideComponentElement;
        new (): HTMLSlideComponentElement;
    };
    interface HTMLSliderComponentElement extends Components.SliderComponent, HTMLStencilElement {
    }
    var HTMLSliderComponentElement: {
        prototype: HTMLSliderComponentElement;
        new (): HTMLSliderComponentElement;
    };
    interface HTMLElementTagNameMap {
        "button-next": HTMLButtonNextElement;
        "button-prev": HTMLButtonPrevElement;
        "slide-component": HTMLSlideComponentElement;
        "slider-component": HTMLSliderComponentElement;
    }
}
declare namespace LocalJSX {
    interface ButtonNext {
        "onNextSlide"?: (event: ButtonNextCustomEvent<void>) => void;
    }
    interface ButtonPrev {
        "onPrevSlide"?: (event: ButtonPrevCustomEvent<void>) => void;
    }
    interface SlideComponent {
        "src"?: string;
    }
    interface SliderComponent {
        "showStatus"?: boolean;
    }
    interface IntrinsicElements {
        "button-next": ButtonNext;
        "button-prev": ButtonPrev;
        "slide-component": SlideComponent;
        "slider-component": SliderComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-next": LocalJSX.ButtonNext & JSXBase.HTMLAttributes<HTMLButtonNextElement>;
            "button-prev": LocalJSX.ButtonPrev & JSXBase.HTMLAttributes<HTMLButtonPrevElement>;
            "slide-component": LocalJSX.SlideComponent & JSXBase.HTMLAttributes<HTMLSlideComponentElement>;
            "slider-component": LocalJSX.SliderComponent & JSXBase.HTMLAttributes<HTMLSliderComponentElement>;
        }
    }
}