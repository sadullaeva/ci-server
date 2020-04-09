import React from 'react';
import IconText from 'base.blocks/iconText/iconText';

export default {
  title: 'Icon text',
  component: IconText,
};

export const Primary = () => (
  <>
    <h3>Calendar</h3>
    <IconText type={'primary'} icon={'calendar'}>
      21 янв, 03:06
    </IconText>
    <h3>Stopwatch</h3>
    <IconText type={'primary'} icon={'stopwatch'}>
      1 ч 20 мин
    </IconText>
    <h3>Commit</h3>
    <IconText type={'primary'} icon={'commit'}>
      master
    </IconText>
    <h3>User</h3>
    <IconText type={'primary'} icon={'user'}>
      Philip Kirkorov
    </IconText>
  </>
);

export const Secondary = () => (
  <>
    <h3>Calendar</h3>
    <IconText type={'secondary'} icon={'calendar'}>
      21 янв, 03:06
    </IconText>
    <h3>Stopwatch</h3>
    <IconText type={'secondary'} icon={'stopwatch'}>
      1 ч 20 мин
    </IconText>
    <h3>Commit</h3>
    <IconText type={'secondary'} icon={'commit'}>
      master
    </IconText>
    <h3>User</h3>
    <IconText type={'secondary'} icon={'user'}>
      Philip Kirkorov
    </IconText>
  </>
);
