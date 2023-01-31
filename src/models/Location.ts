type Coords = {
  lat: number;
  lon: number;
};

export enum AddressType {
  State = "administrative_area_level_1",
  City = "administrative_area_level_2",
}

type Address = {
  long_name: string;
  short_name: string;
  types: AddressType[];
};

type LocationItem = {
  address_components: Address[];
};

export type Location = LocationItem[];

export const getAddressName = (
  location: Location,
  addressType: AddressType
) => {
  let address: LocationItem = { address_components: [] };

  location.forEach((location) => {
    if (
      location.address_components.length > address.address_components.length
    ) {
      address = location;
    }
  });

  return address.address_components.find((address) =>
    address.types.includes(addressType)
  );
};
