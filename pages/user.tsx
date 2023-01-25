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
    /* Need to do: Replace the Layout function with the RouteView.
Transfer over elements from the layout to make sure RouteView
Maintains the design features*/
    /*<Layout role="User">
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
              <div>
                <h2>Introduction</h2>
              </div>
                <div>
                  <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis ligula, finibus eu tortor ut, facilisis varius ipsum. Quisque convallis lectus non augue ultrices porta. Nulla feugiat ex sit amet ultrices varius. Nulla pretium venenatis volutpat. Sed eget suscipit est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla leo, mollis quis mattis ut, congue non massa. Suspendisse ut velit ut felis viverra convallis et ac lectus. Ut mattis vel lorem sed efficitur. Suspendisse potenti.

Vivamus condimentum eu massa eget tincidunt. Donec sagittis viverra ante, vitae elementum ipsum sollicitudin a. Fusce placerat enim dignissim, feugiat magna in, tempor erat. Nam volutpat, velit in venenatis auctor, velit neque suscipit nibh, id molestie ante dui ut ligula. Pellentesque sed massa blandit, euismod velit ac, hendrerit nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce imperdiet pulvinar suscipit. Ut ante ex, tempus ac ultricies sed, tincidunt vitae nisl.

Etiam tincidunt, ex sed tempor imperdiet, nunc dui pellentesque arcu, non posuere elit ex quis mauris. Phasellus nulla sem, mollis eu dui sit amet, suscipit faucibus ipsum. Quisque aliquet, elit ut congue fringilla, tellus leo vehicula mauris, id consequat mauris neque eget mi. Nam id dui viverra nisl scelerisque mattis. Phasellus dapibus sed diam in elementum. In lacinia hendrerit sapien, ut suscipit lorem. Ut euismod ante vel sodales dictum. Donec a neque lobortis, bibendum eros non, facilisis nisl. Quisque consectetur vestibulum tempor. In porttitor sed nulla a eleifend. Praesent at arcu turpis. Donec nec nulla sed libero aliquet congue. Nunc leo velit, blandit nec arcu sed, pharetra aliquam lacus. Vestibulum aliquam lacus in diam gravida laoreet. Fusce bibendum efficitur justo at molestie.

Aenean eu aliquet lorem, eu imperdiet erat. Nulla facilisi. Nam orci risus, viverra quis leo quis, venenatis tincidunt nulla. Nunc euismod iaculis sem, eu interdum mi lacinia nec. Sed feugiat mattis enim, non blandit massa. Pellentesque vitae facilisis velit. Maecenas ut mauris vitae ante efficitur malesuada nec sit amet dolor. Sed et magna vel orci fringilla maximus nec a sapien. Donec sapien turpis, efficitur sed turpis at, pretium ullamcorper enim. Quisque efficitur vitae est eget finibus. Vestibulum in porttitor dui, sit amet laoreet enim. Pellentesque arcu leo, finibus nec rhoncus sed, consequat at magna. Ut a mi ac quam finibus varius. Mauris vulputate tincidunt ipsum. Mauris pulvinar mi et elit cursus consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aenean laoreet fermentum vehicula. Suspendisse tempus dictum turpis, eget sagittis neque vehicula et. Aenean cursus elit odio, ornare porta neque ullamcorper in. Donec sed augue eu diam pretium tempor eu vel purus. In tempus facilisis dui, eget imperdiet mi porttitor vel. In eu mollis ex, at pellentesque erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed volutpat nisi. Suspendisse potenti. Pellentesque non consequat mi. 
                  </p>
                </div>
          </Layout> */
    <RouteView></RouteView>
  );
}
