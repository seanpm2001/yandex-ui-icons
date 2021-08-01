/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface FireOutlineProps extends SVGAttributes<SVGSVGElement> {
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

export const FireOutline = forwardRef<SVGSVGElement, FireOutlineProps>((props, ref) => {
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
        d="M8.343 3.638c-.09 1.849-.382 2.573-3.217 6.701-2.22 3.232-2.277 7.522.928 10.165.936.772 2.085 1.243 3.226 1.496 1.205.268 1.847-1.053 1.014-1.847-1.328-1.268-1.195-2.606-.115-3.847.812-.931 1.332-1.967 1.554-3.014 2.767 1.7 4.119 4.915 1.946 6.796-.931.806-.222 2.255 1.048 1.862 5.634-1.747 6.552-6.5 6.071-9.936-.385-2.756-1.745-5.48-3.254-6.642-1.167-1.037-2.2-.477-2.363 1.085a6.113 6.113 0 0 1-.144.743c-.832-2.273-2.644-4.15-4.623-5.014-1.12-.488-1.996-.096-2.071 1.452zm1.53 8.533c.042 1.037-.38 1.88-1.202 2.822-1.021 1.172-1.893 3.053-.77 4.89-2.959-2.52-2.8-5.941-1.123-8.417l.234-.337.564-.803.043-.061c.243-.347.425-.611.6-.871 1.267-1.892 1.816-3.816 1.954-5.521 1.711 1.05 3.229 3.46 3.685 5.366a1 1 0 0 0 1.656.498c.614-.575 1.106-1.809 1.227-2.696.856 1.051 1.816 3.388 2.077 5.25.493 3.53-.866 5.822-2.768 7.415 1.435-3.383-1.017-7.165-4.424-8.615-1.176-.501-1.789.178-1.753 1.08z"
        fill="currentColor"
      />
    </svg>
  )
})
