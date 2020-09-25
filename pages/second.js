import React, { useState } from "react";
import styles from "../styles/Second.module.css";
import Button from "../components/Button";
import axios from "axios";
import Link from "next/link";

export default (Second) => {
  const [persons, setPersons] = useState([]);

  const getAllpersons = async () => {
    await axios
      .get("/api/all_persons")
      .then((res) => {
        setPersons(res.data);
      })
      .catch((err) => console.log(err));
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
