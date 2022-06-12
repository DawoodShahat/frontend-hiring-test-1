type Props = {
  label: string;
  loading?: boolean;
  onClick?: () => void;
};

export default function Button({ label, onClick, loading = false }: Props) {
  return (
    <button onClick={onClick} className="btn-container">
      {loading ? 'loading...' : label}
    </button>
  );
}
