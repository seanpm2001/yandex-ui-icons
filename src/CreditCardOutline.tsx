/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface CreditCardOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const CreditCardOutline = forwardRef<SVGSVGElement, CreditCardOutlineProps>((props, ref) => {
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
        d="M18.795 5H5.205c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C2.116 6.686 2 7.09 2 8.205v7.59c0 1.115.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h13.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926v-7.59c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C20.314 5.116 19.91 5 18.795 5zM4.356 7.049c.155-.03.422-.049.849-.049h13.59c.427 0 .694.019.849.049.06.012.074.017.134.049.054.027.098.07.125.124.031.06.036.073.048.134.03.155.049.422.049.849V9H4v-.795c0-.427.019-.694.049-.849a.353.353 0 0 1 .049-.134.275.275 0 0 1 .124-.124.353.353 0 0 1 .134-.049zM4 11v4.795c0 .427.019.694.049.849.012.06.017.074.049.134.027.054.07.098.124.125.06.031.073.036.134.048.155.03.422.049.849.049h13.59c.427 0 .694-.019.849-.049a.352.352 0 0 0 .134-.049.275.275 0 0 0 .125-.124.352.352 0 0 0 .048-.134c.03-.155.049-.422.049-.849V11H4zm3 4a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2H7z"
        fill="currentColor"
      />
    </svg>
  )
})
