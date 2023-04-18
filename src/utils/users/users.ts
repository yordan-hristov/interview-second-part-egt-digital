import type User from "types/user";

export const getInitialFormValues = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}: User) => ({
  name,
  username,
  email,
  phone,
  website,
  companyName: company.name,
  companyCatchPhrase: company.catchPhrase,
  companyBs: company.bs,
  addressCity: address.city,
  addressStreet: address.street,
  addressSuite: address.suite,
  addressZipCode: address.zipcode,
  addressLongitude: address.geo.lng,
  addressLatitude: address.geo.lat,
});
