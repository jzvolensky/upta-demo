import * as XML from 'xml-js';
import React, { useEffect, useState } from 'react';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';

/*TODO: Add Solid authentification logic
    1. Check if a user is logged in
    2. If yes, good job
    3. If not, notify the user to login
    4. Pick a route
    5. ???
    6. Profit
*/

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
            const jsonString = JSON.stringify(json);
            console.log('JSON string success');
            // Parsing the routes from json
            const jsonParsed = JSON.parse(jsonString);
            console.log('JSON parsed!')
            setRoutes(routes);
        });
    }, []);
            
    return (
        <div>
            <Select
                labelId="route-select-label"
                id="route-select"
                value={selectedRoute}
                
            >
                {routes.map(route => (
                    <MenuItem value={route}>{route}</MenuItem>
                ))}
            </Select>
            <Button variant="contained" color="primary" /*onClick={handleSave}*/>
                Save
            </Button>
        </div>
    );
}

export default MyComponent;