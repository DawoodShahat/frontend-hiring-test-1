import { useState } from "react";
import toast from "react-hot-toast";

import { archiveCall } from "../../api";

type Props = {
  value: string
}

export default function ArchiveCallCell({ value }: Props){
  const [loading, setLoading] = useState(false);

  const fetchArchiveCell = async () => {
    try {
      setLoading(true);
      const res: any = await archiveCall(value);
      toast.success('Successfully Archived Call');
    }catch(err){
      toast.success(err.data.message);
    }finally {
      setLoading(false);
    }
  }

  const handleArchiveCall = (e) => {
    e.stopPropagation();
    fetchArchiveCell();
  }

  return (
    <div className="archive-call-cell">
      <button disabled={loading} onClick={handleArchiveCall}>{loading ? 'loading...' : 'Archive'}</button>
    </div>
  )
}