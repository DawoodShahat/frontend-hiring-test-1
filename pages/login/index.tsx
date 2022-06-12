import { useState } from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import ContentBox from "../../components/common/ContentBox";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

import { login } from "../../api";
import { setAccessToken, setRefreshToken } from "../../utils/storage";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function fetchLogin(){
    try {
      setLoading(true);
      const res: any = await login({ username, password });

      setAccessToken(res.access_token);
      setRefreshToken(res.refresh_token);

      router.push('/');

    }catch(err){
      console.error(err);
    }finally {
      setLoading(false);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLogin();
  };

  return (
    <div>
      <Head>
        <title>Login - Turing Tech</title>
      </Head>

      <main>
        <ContentBox className="login-page">
          <header>
            <h1>Login</h1>
          </header>
          <form onSubmit={handleLogin} className="form-container">
            <Input
              placeholder="Username"
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <Input
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button loading={loading} label="Login" />
          </form>
        </ContentBox>
      </main>
    </div>
  );
}
