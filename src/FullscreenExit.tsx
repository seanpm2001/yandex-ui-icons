/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface FullscreenExitProps extends SVGAttributes<SVGSVGElement> {
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

export const FullscreenExit = forwardRef<SVGSVGElement, FullscreenExitProps>((props, ref) => {
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
        d="M19.293 3.293a1 1 0 1 1 1.414 1.414l-2.944 2.944A10 10 0 0 1 16 9.055v.291l.39-.09A10 10 0 0 1 18.64 9h.861a1 1 0 1 1 0 2l-5-.003a1.5 1.5 0 0 1-1.5-1.5V4.5a1 1 0 1 1 2 0v.861c0 .757-.086 1.511-.256 2.249l-.09.39h.295a9.995 9.995 0 0 1 1.411-1.775l2.933-2.932zM8 14.653v.292c-.638.4-1.23.87-1.763 1.404l-2.944 2.944a1 1 0 1 0 1.414 1.414l2.933-2.932A10 10 0 0 0 9.05 16h.296l-.09.39A10 10 0 0 0 9 18.64v.861a1 1 0 1 0 2 0v-4.997a1.5 1.5 0 0 0-1.5-1.5L4.5 13a1 1 0 1 0 0 2h.861c.757 0 1.511-.086 2.249-.256l.39-.09z"
        fill="currentColor"
      />
    </svg>
  )
})
