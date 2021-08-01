/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface PhoneLegacyProps extends SVGAttributes<SVGSVGElement> {
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

export const PhoneLegacy = forwardRef<SVGSVGElement, PhoneLegacyProps>((props, ref) => {
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
        d="M3 7.5c0 .63.6 2.4.6 2.4.3.75 1.5 3.9 4.2 6.3 2.4 2.55 5.55 4.05 6.45 4.5l2.25.3c.45 0 2.1 0 3-.9.75-.6 1.05-1.05 1.05-1.2 0 0 .6-1.8.45-1.95-.3-.3-4.05-2.55-4.5-2.4 0 0-2.25 2.1-2.4 2.1-.15 0-2.55-.255-4.05-1.65-1.8-1.68-2.55-4.5-2.55-4.5s0-.6.3-.75c.3-.3 1.5-1.5 1.5-1.95C9.75 6.75 7.35 3 7.05 3c0 0-1.095-.104-1.95.3-.75.346-1.125.72-1.5 1.456-.675 1.35-.6 2.1-.6 2.745V7.5z"
        fill="currentColor"
      />
    </svg>
  )
})
