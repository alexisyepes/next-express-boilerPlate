import React, { useState } from "react";
import styles from "../styles/Second.module.css";
// import Button from "../components/Button";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import Link from "next/link";

const Second = (props) => {
  const [persons, setPersons] = useState([]);
  console.log(props);

  const getAllpersons = async () => {
    setPersons(props.data);
  };
  return (
    <div className={styles.secondPageContainer}>
      <button>
        <Link href="/">
          <a>First page</a>
        </Link>
      </button>
      <h2 className={styles.mainTitle}>Second Page</h2>
      <button onClick={getAllpersons}>Load persons</button>
      {persons.length > 0 ? (
        persons.map((person) => {
          return (
            <ul key={person._id}>
              <li>{person.name}</li>
              <li>{person.lastName}</li>
            </ul>
          );
        })
      ) : (
        <p>No persons in list yet</p>
      )}
    </div>
  );
};

Second.getInitialProps = async function () {
  // const res = await fetch("http://localhost:3000/api/all_persons"); //in development
  const res = await fetch(
    "https://next-app-alex-yepes-test.herokuapp.com/api/all_persons" //in production
  );
  const data = await res.json();

  return {
    data,
  };
};

// Second.getInitialProps = async (ctx) => {
//   const res = await fetch("http://localhost:3000/api/all_persons");
//   const json = await res.json();
//   return { name: json.person };
// };

export default Second;
