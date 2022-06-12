import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import toast from "react-hot-toast";

import ContentBox from "../../components/common/ContentBox";
import CallView from "../../components/CallView";
import Loader from "../../components/common/Loader";

import { getSingleCall } from "../../api";
import { Call } from "../../types";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [call, setCall] = useState({});

  const router = useRouter();
  const { id } = router.query;

  async function fetchGetSingleCall() {
    try {
      setLoading(true);
      const res: any = await getSingleCall(id);

      setCall(res);
    } catch (err) {
      toast.error(err.data.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGetSingleCall();
  }, []);

  return (
    <div>
      <Head>
        <title>Call - {id} </title>
      </Head>

      <main>
        <ContentBox className="call-page">
          <header className="d-flex align-items-center">
            <button onClick={() => router.push('/')}>&#x2190; back</button>
            <h4 className="mb-0 ms-2">Call</h4>
          </header>
          {loading ? (
            <Loader />
          ) : (
            <CallView
              duration={call.duration}
              is_archived={call.is_archived}
              from={call.from}
              to={call.to}
              direction={call.direction}
              call_type={call.call_type}
              via={call.via}
              created_at={call.created_at}
              notes={call.notes}
            />
          )}
        </ContentBox>
      </main>
    </div>
  );
}
