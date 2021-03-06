import {getWeekDay, humanDuration, WeekDayEnum} from './dateTimeHelpers';

describe('dateTimeHelpers', () => {
  describe('#getWeekDay()', () => {
    test.each`
      date                                    | expected
      ${new Date('2020-08-06T07:57:01.283Z')} | ${WeekDayEnum.Thursday}
      ${new Date('2020-08-07T07:57:01.283Z')} | ${WeekDayEnum.Friday}
      ${new Date('2020-08-08T07:57:01.283Z')} | ${WeekDayEnum.Saturday}
      ${new Date('2020-08-09T07:57:01.283Z')} | ${WeekDayEnum.Sunday}
      ${new Date('2020-08-10T07:57:01.283Z')} | ${WeekDayEnum.Monday}
      ${new Date('2020-08-11T07:57:01.283Z')} | ${WeekDayEnum.Tuesday}
      ${new Date('2020-08-12T07:57:01.283Z')} | ${WeekDayEnum.Wednesday}
    `('should return $expected for the given date', ({date, expected}) => {
      expect(getWeekDay(date)).toBe(expected);
    });
  });

  describe('#humanDuration', () => {
    it('should return the duration human readable format', () => {
      expect(humanDuration('03:13:00')).toBe('3Hrs. 13min');
      expect(humanDuration('11:54:00')).toBe('11Hrs. 54min');
      expect(humanDuration('10:01:00')).toBe('10Hrs. 01min');
      expect(humanDuration('00:55:00')).toBe('55min');
      expect(humanDuration('16:18')).toBe('16min');
    });
  });
});
