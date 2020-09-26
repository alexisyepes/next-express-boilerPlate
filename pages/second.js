import { useState } from "react";
import styles from "../styles/Second.module.css";
// import Button from "../components/Button";
import fetch from "isomorphic-unfetch";
// import axios from "axios";
import Link from "next/link";

const Second = (data) => {
  const [persons, setPersons] = useState([]);
  console.log(data);

  const getAllpersons = async () => {
    setPersons(data.data);
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

export async function getServerSideProps({ req }) {
  // Fetch data from external API
  const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
  const res = await fetch(baseUrl + "/api/all_persons");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

// Second.getInitialProps = async function ({ req }) {
//   const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
//   const res = await fetch(baseUrl + "/api/all_persons");

//   const data = await res.json();

//   return {
//     data,
//   };
// };

export default Second;
