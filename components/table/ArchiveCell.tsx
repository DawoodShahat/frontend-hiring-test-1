type Props = {
  value: boolean
}

export default function ArchiveCell({ value }: Props){
  return (
    <div className="archive-cell">
      {value ? 'yes' : 'no'}
    </div>
  )
}