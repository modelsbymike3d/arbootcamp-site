export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 pt-4 text-center color-header">
      {children}
    </h1>
  );
}
