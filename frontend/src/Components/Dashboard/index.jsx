import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  let [message, setMessage] = useState("");
  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const email = localStorage.getItem("email");
    axios
      .get(`${process.env.REACT_APP_HOST}/get-token`, {
        params: {
          email: email,
        },
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
      })
      .catch((error) => {
        error = new Error();
      });

    // make the API call
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(`${process.env.REACT_APP_HOST}/auth-endpoint`, config)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return <div>{message}</div>;
}
