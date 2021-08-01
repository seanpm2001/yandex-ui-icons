/* This file was created automatically, don't change it manually. */

import React, { SVGAttributes, forwardRef } from 'react'

export interface SourceProps extends SVGAttributes<SVGSVGElement> {
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

export const Source = forwardRef<SVGSVGElement, SourceProps>((props, ref) => {
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
        d="M14.962 13.41c-.927.06-1.915.09-2.962.09-1.047 0-2.035-.03-2.962-.09.267 4.954 1.884 8.74 2.962 8.74 1.078 0 2.694-3.785 2.962-8.74zm-7.936-.188c.152 3.571.961 6.533 2.06 8.442C4.983 20.404 2 16.554 2 12v-.09c1.329.621 3.003 1.056 5.026 1.312zm-4.784-3.44c1.127.662 2.719 1.14 4.769 1.42.103-3.76.933-6.882 2.074-8.866C5.67 3.386 3.03 6.23 2.242 9.782zm6.765 1.622C9.129 6.057 10.864 1.85 12 1.85s2.871 4.207 2.993 9.554c-.925.064-1.923.096-2.993.096a43.67 43.67 0 0 1-2.993-.096zm7.967 1.818c2.023-.256 3.697-.69 5.026-1.311V12c0 4.554-2.984 8.404-7.085 9.664 1.098-1.91 1.907-4.871 2.06-8.442zm4.784-3.44c-1.127.662-2.719 1.14-4.769 1.42-.103-3.76-.933-6.882-2.074-8.866 3.415 1.05 6.055 3.894 6.843 7.446z"
        fill="currentColor"
      />
    </svg>
  )
})
