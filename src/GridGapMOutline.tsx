/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface GridGapMOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const GridGapMOutline = forwardRef<SVGSVGElement, GridGapMOutlineProps>((props, ref) => {
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
        d="M5.497 3.006 10 3.001a1 1 0 0 1 1.001 1V10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5.506a2.5 2.5 0 0 1 2.497-2.5zM4 13.008a1 1 0 0 0-.999 1V18.5A2.5 2.5 0 0 0 5.5 21H10a1 1 0 0 0 1-1v-5.999a1 1 0 0 0-1.001-1l-6 .007zm10 0a1 1 0 0 0-.999 1V20a1 1 0 0 0 1 1h4.5a2.5 2.5 0 0 0 2.5-2.5v-4.499a1 1 0 0 0-1.001-1l-6 .007zm0-10a1 1 0 0 0-.999 1V10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5.503a2.5 2.5 0 0 0-2.503-2.5L14 3.008zM5 18.5a.5.5 0 0 0 .5.5H9v-3.998l-4 .005V18.5zm13.5.5H15v-3.993l4-.005V18.5a.5.5 0 0 1-.5.5zM9 9V5.002l-3.5.004a.5.5 0 0 0-.5.5V9h4zm10 0h-4V5.007l3.5-.004a.5.5 0 0 1 .5.5V9z"
        fill="currentColor"
      />
    </svg>
  )
})
