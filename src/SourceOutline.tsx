/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SourceOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const SourceOutline = forwardRef<SVGSVGElement, SourceOutlineProps>((props, ref) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm7.865-11.491a1.014 1.014 0 0 0-.153.033c-.979.295-2.055.522-3.228.68-.12-2.881-.895-5.251-1.833-6.867 2.666.948 4.687 3.285 5.214 6.154zm.117 2.038c-.217 3.293-2.378 6.048-5.331 7.098.887-1.528 1.628-3.73 1.808-6.402a23.812 23.812 0 0 0 3.523-.696zm-5.49-1.126C14.367 7.166 12.904 4 12 4c-.904 0-2.367 3.166-2.492 7.42.794.053 1.624.08 2.492.08.868 0 1.698-.026 2.492-.08zm-6.95 1.821a23.822 23.822 0 0 1-3.524-.695c.217 3.293 2.378 6.048 5.331 7.098-.887-1.528-1.628-3.73-1.808-6.403zm-.026-2.02c.12-2.881.895-5.251 1.833-6.867-2.666.948-4.687 3.285-5.214 6.154.051.007.102.018.153.033a21.04 21.04 0 0 0 3.228.68zm6.932 2.206A39.83 39.83 0 0 1 12 13.5c-.847 0-1.663-.024-2.449-.072C9.828 17.247 11.157 20 12 20c.843 0 2.172-2.752 2.448-6.572z"
        fill="currentColor"
      />
    </svg>
  )
})
