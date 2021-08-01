/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface DownloadOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const DownloadOutline = forwardRef<SVGSVGElement, DownloadOutlineProps>((props, ref) => {
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
        d="M12 2c-.55 0-1 .45-1 1v8.922a10 10 0 0 0 .254 2.24l-.206.206-.215-.344c-.4-.64-.873-1.234-1.407-1.768l-.966-.966a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.89 3.883a1.5 1.5 0 0 0 2.12 0l3.89-3.883c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-.966.966a10.004 10.004 0 0 0-1.407 1.768l-.215.344-.206-.207a10 10 0 0 0 .254-2.24V3c0-.55-.45-1-1-1zM6 20a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6z"
        fill="currentColor"
      />
    </svg>
  )
})
