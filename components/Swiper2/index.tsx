// REACT
import { Children } from 'react';

// HOOKS
import useBreakpoints from 'hooks/useBreakpoints';
import useTouchDevice from 'hooks/useTouchDevice';

// TYPES
import Breakpoint from 'interfaces/Breakpoint';

// STYLES
import styles from './swiper.module.scss';

type Props = {
    children: React.ReactNode;
    breakpoints: Breakpoint[];
    slidesOnDisplay: number;
};

const Swiper: React.FC<Props> = ({ children, breakpoints, slidesOnDisplay }) => {
    const slideCount = useBreakpoints(slidesOnDisplay, breakpoints);
    const isTouch = useTouchDevice();

    const childCount = Children.count(children);

    return (
        <div className={`${styles.swiper} ${isTouch ? styles.snap : ''}`}>
            <div className={styles.slider} style={{ width: `${(100 / slideCount) * childCount}%` }}>
                {children}
            </div>
        </div>
    );
};

export default Swiper;
