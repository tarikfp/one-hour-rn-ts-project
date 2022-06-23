import { IReduxUser } from "../../../lib/types";

type FormValues = Omit<IReduxUser, "id">;
export const getAddUserInitialValues: FormValues = {
  age: 0,
  company: {
    title: "",
    name: "",
    department: "",
    address: {
      address: "",
      city: "",
      coordinates: {
        lat: 0,
        lng: 0,
      },
      postalCode: "",
      state: "",
    },
  },
  firstName: "",
  image: "",
  lastName: "",
};
