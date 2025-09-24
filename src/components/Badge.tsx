import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  onClick?: () => void;
  className?: string;
}

const variantToColors: Record<BadgeVariant, { background: string; color: string; border: string }> = {
  default: { background: '#f1f5f9', color: '#0f172a', border: '#e2e8f0' },
  success: { background: '#ecfdf5', color: '#065f46', border: '#a7f3d0' },
  warning: { background: '#fffbeb', color: '#92400e', border: '#fde68a' },
  error: { background: '#fef2f2', color: '#7f1d1d', border: '#fecaca' },
  info: { background: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
};

const sizeToPadding: Record<BadgeSize, { padding: string; fontSize: number }> = {
  sm: { padding: '2px 6px', fontSize: 12 },
  md: { padding: '3px 8px', fontSize: 13 },
  lg: { padding: '4px 10px', fontSize: 14 },
};

export const Badge = ({
  label,
  variant = 'default',
  size = 'md',
  rounded = true,
  onClick,
  className,
}: BadgeProps) => {
  const { background, color, border } = variantToColors[variant];
  const { padding, fontSize } = sizeToPadding[size];

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background,
    color,
    border: `1px solid ${border}`,
    borderRadius: rounded ? 9999 : 6,
    padding,
    fontSize,
    fontWeight: 600,
    lineHeight: 1,
    userSelect: 'none',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'transform 120ms ease',
  };

  return (
    <span
      role={onClick ? 'button' : 'status'}
      aria-label={label}
      onClick={onClick}
      style={style}
      className={className}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={onClick ? 0 : -1}
    >
      {label}
    </span>
  );
}
