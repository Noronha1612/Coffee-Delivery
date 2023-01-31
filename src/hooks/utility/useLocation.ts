import { useQueryGeoData } from "@/hooks/fetching/useQueryGeoData";
import { AddressType, getAddressName } from "@/models/Location";

export const useLocation = () => {
  const { data } = useQueryGeoData();

  console.log(data);

  const location = data.results;

  if (!location || !location.length) {
    return {};
  }

  const city = getAddressName(location, AddressType.City);
  const state = getAddressName(location, AddressType.State);

  return { city: city?.long_name, state: state?.short_name };
};
