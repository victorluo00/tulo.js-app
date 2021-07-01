import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | tulo.js</title>
        <meta
          name='description'
          content='Making service workers easy so that your app is fast and reliable, even offline.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Main>Main content</Main>
      </Layout>
    </>
  );
};

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export default Home;