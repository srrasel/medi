export function Button({ className, children, ...props }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-blue-500 text-white px-3 py-1 text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}