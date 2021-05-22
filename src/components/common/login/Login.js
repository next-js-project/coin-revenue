import React, { useEffect } from "react";
import KakaoLogin from "react-kakao-login";

const Login = () => {
  useEffect(() => {
    console.log("test");
  });
  return (
    <>
      <KakaoLogin
        token={process.env.KAKAO_JAVASCRIPT_KEY}
        onSuccess={console.log}
        onFail={console.error}
        onLogout={console.info}
      />
    </>
  );
};

export default Login;
