import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
          { text: ['size-17', 'size-18', 'size-19', 'size-21', 'size-64', 'size-42', 'size-32', 'size-54', 'size-22'] }
      ],
      leading: ['leading-25-5', 'leading-27', 'leading-28-5', 'leading-28-8', 'leading-30-6', 'leading-36', 'leading-78', 'leading-50-4', 'leading-38-4', 'leading-33', 'leading-34-2', 'leading-77', 'leading-21-6', 'leading-26-4'],
      tracking: ['tracking-0', 'tracking-0-17', 'tracking-0-18', 'tracking-0-38', 'tracking-0-48', 'tracking-0-57', 'tracking-1-2', 'tracking-1-3', 'tracking-0-32'],
      'font-family': [
        { 'font-family': ['inter', 'cardo'] }
      ]
    }
  }
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
