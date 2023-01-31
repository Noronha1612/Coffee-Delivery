import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { QueryKey } from "./QueryKeys";
import { Location } from "@/models/Location";

type GetLocationResponse = {
  status: string;
  results: Location;
};

const fetchData = (lat: number, lon: number) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_KEY ?? "";

  if (lat && lon && API_KEY) {
    return axios.get<GetLocationResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${API_KEY}`
    );
  }
};

export const useQueryGeoData = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setLat(data.coords.latitude);
      setLon(data.coords.longitude);
    });
  }, []);

  const result = useQuery(
    [QueryKey.GetGeocodingData, lat, lon],
    () => fetchData(lat, lon),
    {
      staleTime: 1000 * 60 * 60 * 1, // 1 hour
      keepPreviousData: true,
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  return {
    ...result,
    data: result.data?.data ?? { results: [], status: "NOT_LOADED" },
  };
};
