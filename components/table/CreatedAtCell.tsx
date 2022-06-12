import { format } from 'date-fns';

type Props = {
  value: string
}

export default function CreatedAtCell({ value }: Props){
  return (
    <div className="created-at-cell">
      {format(new Date(value), 'MM/dd/yyyy')}
    </div>
  )
}