import { useQuery } from "@apollo/client";
import { Text } from "react-native";
import * as React from "react";
<<<<<<< HEAD
import {useEffect} from "react"
import { HELLO_WORLD } from "../../database/User";

const Login = ({}) => {
  const { data, error } = useQuery(HELLO_WORLD);
  
  useEffect(() => {
    console.log("login was loaded")
  }, [])
=======
import { LOGIN_USER } from "../../database/User";

const Login = ({}) => {
  const { data, error } = useQuery(LOGIN_USER, {
    variables: { username: "jjmarsha", password: "pokemon" },
  });
>>>>>>> 0e376c80c9e0da1e67a665c8dbc2ba64e77b6d67

  return (
    <Text>
      {(data && JSON.stringify(data)) || (error && JSON.stringify(error))}
    </Text>
  );
};

export default Login;
