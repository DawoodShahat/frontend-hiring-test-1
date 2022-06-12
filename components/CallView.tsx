export default function CallView({
  duration,
  is_archived,
  from,
  to,
  direction,
  call_type,
  via,
  created_at,
  notes,
}) {
  return (
    <div className="mt-4 call-view">
      <p>
        <span className="label">Duration:</span>
        <span>{duration}</span>
      </p>
      <p>
        <span className="label">Is Archived:</span>
        <span>{is_archived ? "Yes" : "No"}</span>
      </p>

      <p>
        <span className="label">From:</span>
        <span>{from}</span>
      </p>

      <p>
        <span className="label">To:</span>
        <span>{to}</span>
      </p>

      <p>
        <span className="label">Direction:</span>
        <span>{direction}</span>
      </p>

      <p>
        <span className="label">Call type:</span>
        <span>{call_type}</span>
      </p>

      <p>
        <span className="label">Via:</span>
        <span>{via}</span>
      </p>

      <p>
        <span className="label">Created at:</span>
        <span>{created_at}</span>
      </p>

      {notes?.length > 0 && (
        <>
          <h4>Notes: </h4>
          <ul>
            {notes.map((note) => (
              <li key={note.id}>{note.content}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
