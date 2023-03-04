import { useRouter } from "next/router";
import Head from "next/head";

const about = () => {
  const router = useRouter();
  const { about } = router.query;
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div>{about}</div>
    </>
  );
};

export default about;
