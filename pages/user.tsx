import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import RouteView from "../components/RouteView";
import Layout from "../components/siteLayout";

export default function User() {
  useEffect(() => {
    
  }, []);

  const title = "Welcome to the user page!";

  return (
    <div>
      <Layout>

      </Layout>
      <RouteView />
    </div>
      
    
  );
}
