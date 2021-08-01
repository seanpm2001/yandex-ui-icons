/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface QrProps extends SVGAttributes<SVGSVGElement> {
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

export const Qr = forwardRef<SVGSVGElement, QrProps>((props, ref) => {
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
        d="M21 7.505a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V4.5A1.5 1.5 0 0 1 16.5 3h3A1.5 1.5 0 0 1 21 4.5v3.005zM9 7.5V4.504a1.5 1.5 0 0 0-1.498-1.5l-3-.003A1.5 1.5 0 0 0 3 4.5V7.5A1.5 1.5 0 0 0 4.5 9h3A1.5 1.5 0 0 0 9 7.5zM5 7V5.001l2 .002V7H5zm-.502 8.004 3-.003A1.5 1.5 0 0 1 9 16.5V19.5A1.5 1.5 0 0 1 7.5 21h-3A1.5 1.5 0 0 1 3 19.5v-2.996a1.5 1.5 0 0 1 1.498-1.5zM7 19H5v-1.997l2-.002V19zM19 5v2.005h-2V5h2zm0 11a1 1 0 1 1 2 0v3.5a1.5 1.5 0 0 1-1.498 1.5l-3.5.005a1 1 0 1 1-.003-2L19 19V16zM11 4v7H4a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0zm2 16a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4zm3-3a1 1 0 0 0 1-1v-3h3a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
        fill="currentColor"
      />
    </svg>
  )
})
