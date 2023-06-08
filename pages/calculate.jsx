// "use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRouter } from "next/router";
import Header from "./header";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export default function Calculate() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapCalculate />;
}
 

function MapCalculate() {
  const [selected, setSelected] = useState(null);
  const [Long, setLong] = useState("");
  const [Lat, setLat] = useState("");

  const router = useRouter();

  const [dataOrigin, setDataOrigin] = useState([]);
  const [dataDestination, setDataDestination] = useState([]);

  const [result, setResult] = useState([]);
  const [statusResult, setStatusResult] = useState(false);
  const [locationOrigin, setLocationOrigin] = React.useState({
    lat: -6.1896095,
    lng: 106.6798958,
  });
  const [locationDestination, setLocationDestination] = React.useState({
    lat: -6.1896095,
    lng: 107.6798958,
  });
  const [selectListOrigin, setSelectListOrigin] = React.useState(null);
  const [selectListDestination, setSelectListDestination] =
    React.useState(null);
  console.log(selectListOrigin, "hello select");
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/data-house`
      );
      setDataOrigin(response.data);
      setDataDestination(response.data);
    } catch (error) {
      console.error("Error fetching dataOrigin:", error);
    }
  };

  const handleCalculate = async (value) => {
    const destinationid = selectListDestination;
    const originid = selectListOrigin;
    try {
      const calculates = { originid, destinationid };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/calculate-route`,
        calculates
      );
      setResult(response.data);
      setStatusResult(true);
      fetchAddresses();
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };
  console.log(result, "hello result");
  const handleChooseOrigin = (e) => {
    setSelectListOrigin(e.target.value);
    setLocationOrigin();
  };
  const handleChooseDestination = (e) => {
    setSelectListDestination(e.target.value);
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return (
    <div className="bg-grey-50 mb-10">
      <Header />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Kalkulasi Rute
      </h2>
      <main class="my-12 relative max-w-l mx-auto rounded ">
        <div class="max-w-sm px-5 mx-auto relative block rounded-lg bg-gray-100">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Dari Alamat
          </label>
          <div class="mt-2">
            <div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Dari</InputLabel>
                    <Select
                      label="Dari"
                      value={selectListOrigin}
                      onChange={handleChooseOrigin}
                    >
                      {dataOrigin.map((item) => (
                        <MenuItem
                          key={item.ID}
                          value={item.ID}

                          // renderValue={renderValue}
                        >
                          {item.Alamat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Tujuan Alamat{" "}
                </label>

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Tujuan
                    </InputLabel>
                    <Select
                      label="Tujuan"
                      value={selectListDestination}
                      onChange={handleChooseDestination}
                    >
                      {dataDestination.map((item) => (
                        <MenuItem
                          key={item.ID}
                          value={item.ID}
                          // renderValue={renderValue}
                        >
                          {item.Alamat}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className="px-5 py-5">
            <div className="flex justify-center gap-1 mt-5">
              <button
                type="button"
                className="flex w-64 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleCalculate}
              >
                Kalkulasi Jarak
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </main>
      <div class="my-12 relative max-w-l mx-auto rounded ">
        <div class="py-5 max-w-md px-5 mx-auto relative block rounded-lg bg-gray-100">
          {statusResult == true ? (
            <div>
            
              {/* <LoadScript googleMapsApiKey="AIzaSyDM0hoZiuTA5JVkJJeNNjjkd6wlD1JP5C0"> */}
              <GoogleMap
                zoom={10}
                center={{lat: result.origin_lat, lng: result.origin_long}}
                mapContainerStyle={containerStyle}
                googleMapsApiKey="AIzaSyDM0hoZiuTA5JVkJJeNNjjkd6wlD1JP5C0"
              >
                {/* {selected && <Marker position={selected} />} */}
                {statusResult && <MarkerF position={{lat: result.destination_lat, lng: result.destination_long}} />}
                {result.destination_lat && <MarkerF position={{lat: result.origin_lat, lng: result.origin_long}} />}
                {result.other_lat && <MarkerF position={{lat: 0, lng: 0}} />}
              </GoogleMap>
              <div className="flex justify-center gap-1 mt-5">
                Euclidean: {result.euclidean}
              </div>
              <div className="flex justify-center gap-1">
                Jarak: {result.haversine} km
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

