import {
  animate,
  animateChild,
  animation,
  group,
  query,
  sequence,
  style,
} from '@angular/animations';

export const slidingCardEnterLeft = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
    }),
  ], { optional: true }),
  query(':enter', [
    style({ left: '100%' }),
  ], { optional: true }),

  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '-100%' })),
    ], { optional: true }),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%' })),
    ], { optional: true }),
  ]),
  query(':enter @*', animateChild(), { optional: true }),
]);

export const slidingCardEnterRight = animation([
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
    }),
  ], { optional: true }),
  query(':enter', [
    style({ left: '-100%' }),
  ], { optional: true }),
  sequence([
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%' })),
      ], { optional: true }),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%' })),
      ], { optional: true }),
    ]),
    query(':enter @*', animateChild(), { optional: true }),
  ]),
]);
