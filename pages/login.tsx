import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <div
      className="relative flex h-screen w-screen flex-col bg-black
     bg-transparent md:items-center md:justify-center"
    >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        alt="netflix"
        width={150}
        height={150}
        className="absolute cursor-pointer object-contain md:left-10 md:top-6"
      />
      <form
        className="md: relative mt-24 max-w-md space-y-8
       bg-black/75 py-10 px-6 md:mt-0 md:px-14"
      >
        <h1>Sign In</h1>
        <div className="space-y-4">
          <label>
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label>
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Login;
