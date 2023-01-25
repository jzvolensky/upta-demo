import * as XML from 'xml-js';
import { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';

interface INetexTimetable {
  elements: [{
      type: 'element',
      name: 'netex:data',
      elements: [{
          type: 'element',
          name: 'netex:serviceFrame',
          elements: [{
              type: 'element',
              name: 'netex:services',
              elements: [{
                  type: 'element',
                  name: 'netex:service',
                  elements: Array<{
                      type: 'element',
                      name: 'netex:routeShortName'
                  }>
              }]
          }]
      }]
  }]
}

async function getTimetable() {
    try {
        const response = await fetch('https://uptacompany.solidcommunity.net/public/Routes/RouteTest.xml');
        const xml = await response.text();
        console.log(xml);
        const json = XML.xml2js(xml, {compact: true});
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
        return {};
    }
}

function MyComponent() {
    const [timetable, setTimetable] = useState({});
    const [routes, setRoutes] = useState([]);
    const [selectedRoute, setSelectedRoute] = useState('');

    useEffect(() => {
        getTimetable().then(json => {
            setTimetable(json);
            // Extract routes from json
            const routes = json.elements[0].elements[0].elements[0].elements[0].elements.map(
              service => service.elements[0].text
          );
            setRoutes(routes);
        });
    }, []);

    function handleRouteChange(event) {
        setSelectedRoute(event.target.value);
    }

    function handleSave() {
        // Save the selected route to the user's Solid Pod
        // ...
    }

    return (
        <div>
            <Select
                labelId="route-select-label"
                id="route-select"
                value={selectedRoute}
                onChange={handleRouteChange}
            >
                {routes.map(route => (
                    <MenuItem value={route}>{route}</MenuItem>
                ))}
            </Select>
            <Button variant="contained" color="primary" onClick={handleSave}>
                Save
            </Button>
        </div>
    );
}

export default MyComponent;