import React from "react";
import DownloadForm from "../components/DownloadForm";
import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <Layout>
      <DownloadForm />
      <QuestionSection />
      <FAQ />
    </Layout>
  );
}

export default Home;
