import React, {FC, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import Select from 'react-select';
import { login, handleIncomingRedirect, getDefaultSession, fetch,} from "@inrupt/solid-client-authn-browser";
import {saveFileInContainer} from "@inrupt/solid-client";
import { SCHEMA_INRUPT, RDF } from "@inrupt/vocab-common-rdf";
import { useSession, CombinedDataProvider, SessionProvider } from "@inrupt/solid-ui-react";
import { getInteger, getSolidDataset, getThingAll, saveSolidDatasetAt,} from '@inrupt/solid-client';





const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px;
  flex: 1;
  align-items: center;
  padding-bottom: 520px;
`

const StyledSelect = styled(Select)`
    width: 240px;
  margin-right: 12px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 8px;
  background-color: purple;
`






const getStopsData = async () => {
    try{
        const result = await fetch("https://opendata.bratislava.sk/api/mhd/stationstop/", {
            method: "GET",
            headers: {
                'key': "hG0ceE5wYbxyh4R2vQndCLU5zMng2o6vIC75Me4n6kl9lrni8Z3bLoyS0TtVcQCJ51XQK8GIIXB8ArwZlyM6RoLXhKp6r5pDRJyle149BrJOGwDMCpWFNyIwvLNO3qHS91mMVfl4MIKXMAH3GBAbBeDz8q9cGdWdgtAWfNxctwUq4vylFxBwvG64c4E3KcQfbYQSTwjcuqSTjr1ypcdzvFhN3J9Mg43qNlrbjK8t0r4ciDXzVv4bTW63mP",
            },
        })
        const data = await result.json();
        return (data)
    }
    catch (e) {
        console.log(e)
    }
}

type TFullTicketData = {
    from: string;
    to: string;
    createdAt: string;
    expiryDate: string;
    gpsFromStation?: TCoordinates;
    gpsToStation?: TCoordinates;
}

type TSelectItem = {value: TCoordinates, label: string}

type TCoordinates = {
    gpsLat: number;
    gpsLon: number;
}

const RouteView:FC = ()  => {
    const [routesData, setRoutesData] = useState([]);
    // State pre obe zastavky
    const [fromStationName, setFromStationName] = useState('');
    const [fromStationGps, setFromStationGps] = useState<TCoordinates | undefined>();

    const [toStationName, setToStationName] = useState('');
    const [toStationGps, setToStationGps] = useState<TCoordinates | undefined>();

    const [fullTicketData, setFullTicketData] = useState<TFullTicketData | null>(null)

    useEffect(() => {
        (async () => {
            const fetchedData = await getStopsData();
            console.log(fetchedData)
            setRoutesData(fetchedData)
        })()
    }, []);

    const getSelectOptions = (data: any[]):{value: TCoordinates, label: string}[] => {
        if(!routesData){
            return []
        }
        const newData = data.map((stop) => ({label: stop.name, value: {gpsLon: stop.gpsLon, gpsLat: stop.gpsLat}}));
        // Pokus o unique zastavky
        const key = "label"
        const unique = [...new Map(newData.map(item => [item[key], item])).values()];
        console.log(unique)     

        return unique;
    }

    const options = getSelectOptions(routesData);

    const onSaveClick = () => {
        const ticketData: TFullTicketData = {
            from: fromStationName, to: toStationName,
            createdAt: new Date().toISOString(),
            expiryDate: new Date().toISOString(),
            gpsFromStation: fromStationGps,
            gpsToStation: toStationGps
        }
        // Tu to posli do severa alebo do mapy
        setFullTicketData(ticketData);
    }

    const onFromSelect = (data: any) => {
        setFromStationName((data as TSelectItem).label);
        setFromStationGps((data as TSelectItem).value);
    }

    const onToSelect = (data: any) => {
        setToStationName((data as TSelectItem).label);
        setToStationGps((data as TSelectItem).value);
    }

    console.log(routesData)
    
    console.log(fullTicketData)


    async function savedTicketFile(){
        const savedTicket = await saveFileInContainer(
            "https://jzvolensky.solidcommunity.net/public/upta_tickets",
            new Blob(["testing 123"], { type: "application/json"}),
            { slug: "tickettest.json", contentType: "application/json", fetch: fetch}
        );
    }

   
    
return (
        <Wrapper>
            <StyledSelect options={options} onChange={onFromSelect} />
            <StyledSelect options={options} onChange={onToSelect} />
            <Button onClick={onSaveClick}>Save</Button>
            <Button onClick={savedTicketFile}>Save To Pod</Button>
            {!!fullTicketData &&  <div>{JSON.stringify(fullTicketData)}</div>}
        </Wrapper>
    );
}
    


export default RouteView;

