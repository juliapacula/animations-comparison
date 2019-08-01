import { animate, animation, sequence, style, transition } from '@angular/animations';

export const jumpUp = animation([
  style({ opacity: '0', transform: 'translateY(30px)' }),
  animate('150ms ease-in', style({ opacity: '1', transform: 'translateY(0)' })),
]);

export const jumpDown = animation([
  style({ opacity: '0', transform: 'translateY(0)' }),
  animate('150ms ease-in', style({ opacity: '1', transform: 'translateY(30px)' })),
]);
