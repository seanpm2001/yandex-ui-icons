/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface LockedOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const LockedOutline = forwardRef<SVGSVGElement, LockedOutlineProps>((props, ref) => {
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
        d="M12 3a5 5 0 0 1 5 5v2.001c.961.014 1.34.129 1.721.333.407.218.727.537.945.945.218.407.334.812.334 1.926v4.59c0 1.114-.116 1.519-.334 1.926a2.272 2.272 0 0 1-.945.945c-.407.218-.811.334-1.926.334h-9.59c-1.115 0-1.519-.116-1.926-.334a2.272 2.272 0 0 1-.945-.945C4.116 19.314 4 18.91 4 17.795v-4.59c0-1.114.116-1.519.334-1.926.218-.408.538-.727.945-.945.381-.204.76-.319 1.721-.333V8a5 5 0 0 1 5-5zm-5.644 9.049c.155-.03.422-.049.849-.049h9.59c.427 0 .694.019.849.049.06.012.074.017.134.049a.275.275 0 0 1 .125.124c.031.06.036.073.048.134.03.155.049.422.049.849v4.59c0 .427-.019.694-.049.849a.353.353 0 0 1-.049.134.275.275 0 0 1-.124.125.353.353 0 0 1-.134.048c-.155.03-.422.049-.849.049h-9.59c-.427 0-.694-.019-.849-.049a.353.353 0 0 1-.134-.049.275.275 0 0 1-.124-.124.353.353 0 0 1-.049-.134c-.03-.155-.049-.422-.049-.849v-4.59c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049zM15 8v2H9V8a3 3 0 1 1 6 0z"
        fill="currentColor"
      />
    </svg>
  )
})
