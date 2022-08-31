import React, { useState } from "react";
import FormAddToList from "./FormAddToList";
import List from "./List";

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function Home() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://www.clarin.com/img/2020/01/26/kobe-bryant-en-una-sesion___lrCtJrjs_340x340__1.jpg",
    },
  ]);
  return (
    <>
      <h1>People invited to my Party</h1>
      <List people={people} />
      <FormAddToList setPeople={setPeople} people={people} />
    </>
  );
}

export default Home;
