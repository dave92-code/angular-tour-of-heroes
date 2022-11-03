
export interface User {
  id?: number,
  name?: string,
  username?: string,
  email?: string,
  address?: UserAddress,
  phone?: string,
  website?: string,
  company?: UserCompany
}

interface UserAddress {
  street?: string,
  suite?: string,
  city?: string,
  zipcode?: string,
  geo?: Geo
}

interface UserCompany {
  name?: string,
  catchPhrase?: string,
  bs?: string
}

interface Geo {
  lat?: string,
  lng?: string
}