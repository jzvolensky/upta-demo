import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RouteView from "../components/RouteView";
import Layout from "../components/siteLayout";
import { getInteger, getSolidDataset, getThingAll, saveSolidDatasetAt,} from '@inrupt/solid-client';
import { fetch, handleIncomingRedirect } from '@inrupt/solid-client-authn-browser';
import { useSession } from "@inrupt/solid-ui-react";


export default function User() {
  
  const { session } = useSession();
  const webId = session.info.webId;

  const [podUrl, setPodUrl] = useState("");
  const [caseId, setCaseId] = useState("");
  const [errors, setErrors] = useState("");

  async function loginAndFetch(){
    await handleIncomingRedirect();
  }

  useEffect(() => {
    if (webId !== "") {
        try {
            const url = new URL(webId!);
            const thePodUrl = webId!.split(url.pathname)[0] + "/";
            console.debug('The POD url is: ', thePodUrl);
            setPodUrl(thePodUrl);
        } catch (error) {

        }
    }
}, [podUrl, webId]);

  const title = "Welcome to the user page!";

  return (
    <div>
      <Layout>
            <div>
              <h2>{title}</h2>
            </div>

            {!session.info.isLoggedIn && <p>User is not logged in!</p>}
            
            {session.info.isLoggedIn &&
              <div>
                <p>User: {webId}</p>
                <p>POD url: {podUrl}</p>
              </div>
            }
      </Layout>
      
    </div>
      
    
  );
}
