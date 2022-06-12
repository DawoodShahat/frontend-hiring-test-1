import ArchiveCallCell from "./ArchiveCallCell";
import ArchiveCell from "./ArchiveCell";
import CreatedAtCell from "./CreatedAtCell";

export const getCallsColumns = () => {
  return [
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "is_archived",
      accessor: "is_archived",
      Cell: ArchiveCell,
    },
    {
      Header: "From",
      accessor: "from",
    },
    {
      Header: "To",
      accessor: "to",
    },
    {
      Header: "Direction",
      accessor: "direction",
    },
    {
      Header: "call_type",
      accessor: "call_type",
    },
    {
      Header: "via",
      accessor: "via",
    },
    {
      Header: "created_at",
      accessor: "created_at",
      Cell: CreatedAtCell
    },
    {
      Header: "Action",
      accessor: "id",
      Cell: ArchiveCallCell
    },
  ];
};

export const getCallsData = () => {
  return [
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
    {
      duration: 11739,
      is_archived: false,
      from: "+33104496245",
      to: "+33103296821",
      direction: "inbound",
      call_type: "missed",
      via: "+33138103510",
      created_at: "2022-06-09T13:25:02.281Z",
    },
  ];
};
