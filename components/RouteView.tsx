import * as React from 'react';
import * as $rdf from 'rdflib';

interface IRoute {
  id: number;
  name: string;
  description: string;
}

interface IState {
  routes: IRoute[];
  selectedRoute: IRoute | null;
}

class App extends React.Component<{}, IState> {
  private store = new $rdf.IndexedFormula();
  private updater = new $rdf.UpdateManager(this.store);

  constructor(props: any) {
    super(props);
    this.state = {
      routes: [],
      selectedRoute: null
    }
  }
/* IMPLEMENTATION FOR XML, NEEDS TO BE WORKED ON. DUTCH OPEN DATA IS IN XML FORMAT SO THIS IS THE WAY TO GO, NEED TO REWORK THE JSON STUFF
async componentDidMount() {
    // request data from pod
    const response = await fetch('https://pod.com/routes.xml');
    const text = await response.text();
    // parse the xml data
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    // get the routes
    const routes: IRoute[] = [];
    const routeNodes = xml.getElementsByTagName("route");
    for (let i = 0; i < routeNodes.length; i++) {
      const routeNode = routeNodes[i];
      const id = routeNode.getAttribute("id");
      const number = routeNode.getAttribute("number");
      const description = routeNode.textContent;
      routes.push({ id, number, description });
    }
    this.setState({ routes });
  }

  handleRouteSelection = (route: IRoute) => {
    this.setState({ selectedRoute: route });
  }

  handleSave = async () => {
  // check if a route is selected
  if (!this.state.selectedRoute) {
    console.log('No route selected');
    return;
  }
  // get the data to save
  const route = this.state.selectedRoute;
  const data = JSON.stringify(route);
  const contentType = "application/json";
  // create a URL for the file to save in the user's pod
  const fileUrl = `https://userpod.com/route-${route.id}.json`;
  // create a symbol for the file
  const graph = $rdf.sym(fileUrl);
  // save the data
  await this.updater.put(graph, data, contentType, (response: any) => {
    if (response.status === 201) {
      console.log('Route saved successfully');
    } else {
      console.log('Error saving route');
    }
  });
}
*/
  async componentDidMount() {
    // request routes data from pod
    const response = await fetch('https://pod.com/routes.json');
    const routes = await response.json();
    this.setState({ routes });
  }

  handleRouteSelection = (route: IRoute) => {
    this.setState({ selectedRoute: route });
  }

  handleSave = async () => {
    // check if a route is selected
    if (!this.state.selectedRoute) {
      console.log('No route selected');
      return;
    }
    // get the data to save
    const route = this.state.selectedRoute;
    const timestamp = new Date().toISOString();
    const data = {
      route,
      timestamp,
    }
    const dataString = JSON.stringify(data);
    const contentType = "application/json";
    // create a URL for the file to save in the user's pod
    const fileUrl = `https://userpod.com/route-${route.id}.json`;
    // create a symbol for the file
    const graph = $rdf.sym(fileUrl);
    // save the data
    await this.updater.put(graph, dataString, contentType, (response: any) => {
      if (response.status === 201) {
        console.log('Route saved successfully');
      } else {
        console.log('Error saving route');
      }
    });
  }
  /* POSSIBLE IMPLEMENTATION OF A PDF VERSION FOR BETTER VIEWING e.g MOBILE, XML TICKETS SEEM A BIT TOO CONFUSING
  handleSave = async () => {
    // check if a route is selected
    if (!this.state.selectedRoute) {
      console.log('No route selected');
      return;
    }
    // get the data to save
    const route = this.state.selectedRoute;
    const timestamp = new Date().toISOString();
    const data = {
      route,
      timestamp,
    }
    // create a pdf document
    const pdf = new jsPDF();
    pdf.text(JSON.stringify(data), 10, 10);
    // create a URL for the file to save in the user's pod
    const fileUrl = `https://userpod.com/route-${route.id}.pdf`;*/
  render() {
    return (
      <div>
        <h1>Travel Routes</h1>
        <ul>
          {this.state.routes.map(route => (
            <li key={route.id} onClick={() => this.handleRouteSelection(route)}>
              {route.name}
            </li>
          ))}
        </ul>
        {this.state.selectedRoute && (
          <div>
            <h2>Selected Route</h2>
            <p>Name: {this.state.selectedRoute.name}</p>
            <p>Description: {this.state.selectedRoute.description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default App;