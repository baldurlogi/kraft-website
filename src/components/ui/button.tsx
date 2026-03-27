import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#d63d2a]/30',
  {
    variants: {
      variant: {
        default:
          'bg-[#d63d2a] text-white shadow-[0_18px_40px_-24px_rgba(214,61,42,0.95)] hover:bg-[#bc311f]',
        ghost:
          'text-slate-700 hover:bg-white/80 hover:text-slate-950',
        outline:
          'border border-slate-200 bg-white/80 text-slate-900 shadow-sm hover:border-slate-300 hover:bg-white',
        secondary:
          'bg-slate-950 text-white hover:bg-slate-800',
      },
      size: {
        default: 'h-11 px-5 py-2.5',
        sm: 'h-9 px-4',
        lg: 'h-12 px-6 text-[0.95rem]',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
