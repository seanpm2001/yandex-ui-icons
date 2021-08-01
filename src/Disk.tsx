/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface DiskProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Additional className for svg root
   */
  className?: string
  /**
   * Icon size
   *
   * @default 24
   */
  size?: 12 | 16 | 24 | 32
}

export const Disk = forwardRef<SVGSVGElement, DiskProps>((props, ref) => {
  const { className, size = 24, ...otherProps } = props

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...otherProps}
      focusable="false"
      aria-hidden="true"
      className={'SvgIcon' + (className ? ' ' + className : '')}
      ref={ref}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.995 7.098c-1.632.127-3.408.438-5.223.92-1.8.477-3.455 1.078-4.894 1.757.015-.043.033-.081.047-.125.73-2.312 1.947-3.864 4.133-4.45 2.186-.586 4.017.149 5.805 1.787.044.04.088.073.132.111zm6.664 3.232c.393 1.457-.956 3.513-3.96 5.005a1.591 1.591 0 0 0-.038-.449c-.18-.674-.832-1.477-2.904-1.477-.965 0-2.143.18-3.405.517-1.515.406-2.777.934-3.65 1.526-1.393.948-1.495 1.861-1.334 2.46.036.133.097.271.176.407-.26.016-.528.043-.773.043-2.897 0-4.785-1.059-5.143-2.397-.598-2.23 3.587-5.128 9.477-6.69 2.379-.632 4.624-.943 6.495-.943 2.758 0 4.702.676 5.059 1.998zm-5.3 5.16a1.61 1.61 0 0 1-.322.421v.002c-.552.527-1.732 1.179-3.696 1.705-1.654.444-3.17.539-4.018.362a1.765 1.765 0 0 1-.382-.121c-.04-.017-.078-.033-.11-.052a.602.602 0 0 1-.082-.062.349.349 0 0 1-.125-.17c-.07-.261.232-.653.81-1.046.742-.504 1.898-.983 3.253-1.346 1.156-.31 2.216-.473 3.07-.473.918 0 1.564.202 1.648.514a.342.342 0 0 1-.012.177c-.007.029-.02.058-.033.089z"
        fill="currentColor"
      />
    </svg>
  )
})
