import React from 'react';
import classNames from 'classnames';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import { setTimePerQuestion } from '../../store/gameSlice';
import styles from './TimeSettings.module.scss';

const TimeSettings: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const { timePerQuestion } = useAppSelector(state => state.game.settings);

  const timeOptions: number[] = [5, 10, 15, 20, 30, 0];

  const handleTimeChange = (time: number) => {
    dispatch(setTimePerQuestion(time));
  };

  const currentIndex: number = timeOptions.indexOf(timePerQuestion);
  const position: number = (currentIndex / (timeOptions.length - 1)) * 100;

  return (
    <div className={styles.timeSettings}>
      <h3 className={styles.title}>Время на ответ</h3>

      <div className={styles.sliderContainer}>
        <div className={styles.track}>
          <div className={styles.filledTrack} style={{ width: `${position}%` }} />
          {timeOptions.map((time: number, index): React.JSX.Element => {
            const optionPosition: number = (index / (timeOptions.length - 1)) * 100;
            return (
              <button
                key={time}
                type="button"
                className={classNames(styles.sliderPoint, {
                  [styles.sliderPointActive]: timePerQuestion === time,
                  [styles.sliderPointSelected]: index < currentIndex,
                })}
                style={{ left: `${optionPosition}%` }}
                onClick={() => handleTimeChange(time)}
              ></button>
            );
          })}
        </div>

        <div className={styles.labels}>
          {timeOptions.map(
            (time: number, index): React.JSX.Element => (
              <span
                key={time}
                className={classNames(styles.label, {
                  [styles.labelSelected]: index < currentIndex,
                  [styles.labelActive]: index === currentIndex,
                })}
                onClick={() => handleTimeChange(time)}
              >
                {time === 0 ? '∞' : time}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeSettings;
