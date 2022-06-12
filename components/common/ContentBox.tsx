type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentBox({ className = "", children }: Props) {
  return <div className={`mt-4 container ${className}`}>{children}</div>;
}
