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
    percentage: number;
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
        this.percentage = 0;
    }

    setPage: (target: EventTarget & Element) => void = target => {
        this.page = Math.round((this.currentOffset / this.slideWidth) * -1);
        this.currentOffset = -(this.slideWidth * this.page);
        target.scrollLeft = -this.currentOffset;
    };

    move: (event: React.TouchEvent | React.MouseEvent) => void = event => {
        let offset = this.moveX - this.fingerStartingXPosition + this.prevOffset;
        event.currentTarget.scrollLeft = -offset;
        this.currentOffset = offset;
    };

    mouseMove: (event: any) => void = event => {
        this.move(event);
    };

    touchMove: (event: any) => void = event => {
        this.move(event);

        const target = event.currentTarget;

        let distance = this.moveX - this.fingerStartingXPosition;

        this.percentage = (-distance / this.slideWidth) * 100;

        if (this.percentage > 50) this.page++;

        if (this.percentage < -50) this.page--;

        if (this.percentage > 50 || this.percentage < -50) {
            target.style.touchAction = 'none';
            target.style.scrollBehavior = 'smooth';

            this.currentOffset = this.slideWidth * this.page;

            this.startScroll = this.currentOffset;
            this.prevOffset = this.currentOffset;

            target.scrollLeft = this.currentOffset;

            distance = 0;
            this.percentage = 0;
            this.moveX = 0;
            this.fingerStartingXPosition = 0;

            setTimeout(() => {
                target.style.touchAction = 'auto';
                target.style.scrollBehavior = 'auto';
            }, 200);
        }

        console.log('CURRENT OFFSET', this.currentOffset);
        console.log('PREV OFFSET', this.prevOffset);
        console.log('START SCROLL', this.startScroll);
        console.log('DISTANCE PERCENTAGE', distance, this.percentage);
    };

    start: (event: React.TouchEvent | React.MouseEvent) => void = event => {
        this.slideWidth = event.currentTarget.clientWidth / this.slidesOnDisplay;
        if (event.nativeEvent instanceof TouchEvent) {
            const target = document.elementFromPoint(
                event.nativeEvent.touches[0].clientX,
                event.nativeEvent.touches[0].clientY
            );
            if (target?.classList.contains('swiper-disabled')) return;
            this.startScroll = event.currentTarget.scrollLeft;
            this.fingerStartingXPosition = event.nativeEvent.touches[0].clientX;
        }
        if (event.nativeEvent instanceof MouseEvent) {
            const target = document.elementFromPoint(event.nativeEvent.clientX, event.nativeEvent.clientY);
            if (target?.classList.contains('swiper-disabled')) return;
            this.mousePressed = true;
            this.fingerStartingXPosition = event.nativeEvent.clientX;
        }
        return;
    };

    use: (event: React.TouchEvent | React.MouseEvent) => void = event => {
        if (event.nativeEvent instanceof MouseEvent) {
            if (!this.mousePressed) return;
            this.moveX = event.nativeEvent.pageX;
            this.mouseMove(event);
        }
        if (event.nativeEvent instanceof TouchEvent) {
            this.moveX = event.nativeEvent.touches[0].clientX;
            this.touchMove(event);
        }
    };

    stop: (event: React.TouchEvent | React.MouseEvent) => void = event => {
        if (event.nativeEvent instanceof TouchEvent) event.currentTarget.scrollLeft = this.startScroll;
        if (event.nativeEvent instanceof MouseEvent) this.setPage(event.currentTarget);
        this.mousePressed = false;
        this.prevOffset = this.currentOffset;
        console.log(this.page);
    };
}

export default Swiper;
