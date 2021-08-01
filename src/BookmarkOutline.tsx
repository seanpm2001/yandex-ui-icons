/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface BookmarkOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const BookmarkOutline = forwardRef<SVGSVGElement, BookmarkOutlineProps>((props, ref) => {
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
        d="M15.795 2h-7.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C5.116 3.686 5 4.09 5 5.205v15.237a1 1 0 0 0 1.618.787L12 17l5.382 4.229A1 1 0 0 0 19 20.442V5.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C17.314 2.116 16.91 2 15.795 2zm-5.03 13.427L7 18.385V5.205c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049c.155-.03.422-.049.849-.049h7.59c.427 0 .694.019.849.049.06.012.074.017.134.049a.275.275 0 0 1 .125.124c.031.06.036.073.048.134.03.155.049.422.049.849v13.18l-3.764-2.958a2 2 0 0 0-2.472 0z"
        fill="currentColor"
      />
    </svg>
  )
})
