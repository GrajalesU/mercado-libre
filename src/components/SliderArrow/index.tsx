import Image from 'next/image';
import cn from 'classnames';

export interface SliderArrowProps {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
  variant?: 'prev' | 'next';
}

const SliderArrow = ({
  className,
  imageClassName,
  onClick,
  variant = 'prev',
}: SliderArrowProps) => (
  <button
    className={cn(
      className,
      'absolute z-10 hidden h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white shadow-narrow transition-all hover:bg-white hover:shadow-arrow focus:bg-white group-hover:flex'
    )}
    onClick={onClick}
  >
    <Image
      width={12}
      height={12}
      src={'/SliderArrow.svg'}
      alt={variant === 'next' ? 'Siguiente' : 'Anterior'}
      className={cn(imageClassName, { 'rotate-180': variant === 'next' })}
    />
  </button>
);

export default SliderArrow;
