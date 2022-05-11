import React from 'react';

class Swiper {
    slidesOnDisplay: number;
    currentOffset: number;
    prevOffset: number;
    fingerStartingXPosition: number;
    startScroll: number;
    mousePressed: boolean;
    moveX: number;
    page: number;
    slideWidth: any;
    constructor(slidesOnDisplay: number) {
        this.slidesOnDisplay = slidesOnDisplay;
        this.moveX = 0;
        this.currentOffset = 0;
        this.prevOffset = 0;
        this.fingerStartingXPosition = 0;
        this.startScroll = 0;
        this.mousePressed = false;
        this.page = 0;
        this.slideWidth = null;
    }

    setPage: (target: EventTarget & Element) => void = target => {
        this.page = Math.round((this.currentOffset / this.slideWidth) * -1);
        this.currentOffset = -(this.slideWidth * this.page);
        target.scrollLeft = -this.currentOffset;
    };

    move: (event: React.MouseEvent) => void = event => {
        let offset = this.moveX - this.fingerStartingXPosition + this.prevOffset;
        event.currentTarget.scrollLeft = -offset;
        this.currentOffset = offset;
    };

    start: (event: React.MouseEvent) => void = event => {
        this.slideWidth = event.currentTarget.clientWidth / this.slidesOnDisplay;
        const target = document.elementFromPoint(event.nativeEvent.clientX, event.nativeEvent.clientY);
        if (target?.classList.contains('swiper-disabled')) return;
        this.mousePressed = true;
        this.fingerStartingXPosition = event.nativeEvent.clientX;
    };

    use: (event: React.MouseEvent) => void = event => {
        if (!this.mousePressed) return;
        this.moveX = event.nativeEvent.pageX;
        this.move(event);
    };

    stop: (event: React.MouseEvent) => void = event => {
        if (event.nativeEvent instanceof MouseEvent) this.setPage(event.currentTarget);
        this.mousePressed = false;
        this.prevOffset = this.currentOffset;
    };
}

export default Swiper;
