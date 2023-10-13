export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onStart);
  }

  onMove(event) {}

  onEnd(event) {
    this.wrapper.addEventListener("mouseup");
    this.wrapper.removeEventListener("mousemove", this.onStart);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}
