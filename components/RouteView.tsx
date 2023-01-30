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

/* TODO: The following code is supposed to load in a Netex route file obtained from 
   https://reisinformatiegroep.nl/ndovloket/datacollecties

   The getTimetable function works as far as I can tell, the file and even its json translation
   are printed in the console.

   What does NOT work is selecting the right tags/classes from the JSON timetable.
   I dont know why. The whole timetable thing is confusing and is only in Dutch, which does not help.
   Furthermore this is only a test sample, where the locations are coded instead of named,
   so to make it completely work, there is supposed to be a dataset with all the codings and what they mean.
   I have not been able to find it on the website above

   As per an online suggestion I tried to use an interface element to specify the json, however, to be
   honest I have no idea what I am doing so it does not nothing at this point.

   The ideal workflow should be load the route file(s) from a Pod > turn them into a json >
   modify the output so its readable by the user > allow them to select one and save it to their Pod.

*/


function MyComponent() {
    const [timetable, setTimetable] = useState({});
    const [routes, setRoutes] = useState([]);
    const [selectedRoute, setSelectedRoute] = useState('');

    
    useEffect(() => {
            (async () => {
                try{
                    const result = await fetch("https://dienstregeling-api.9292.nl/Example/LinesResponse", {
                        method: "GET",
                        headers: {
                            accept: 'text/plain'
                        }
                    })
                    const data = await result.json();
                    console.log(data)
    
                }
                catch (e) {
                    console.log(e)
                }
            })()
        }, [])
            
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