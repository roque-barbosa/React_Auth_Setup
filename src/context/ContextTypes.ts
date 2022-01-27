// Create type that defines what a login must have
export type LoginType = {
  token: string | null,
  user: {
    id: string,
    email: string,
    name: string
  }
}

// Define what our context should have
// A state with our login data, and a setState to change the data
export type PropsAuthContext = {
  isAuthenticated: boolean,
  login: ({ token }: LoginType) => void,
  logout: () => void,
}