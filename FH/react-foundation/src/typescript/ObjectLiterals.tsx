interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    firstName: "Fernando",
    lastName: "Herrera",
    age: 37,
    address: {
      country: "Paraguay",
      houseNo: 403,
    },
  };

  return (
    <div>
      <h2>Objectos Literales</h2>
      <pre>{JSON.stringify(person)}</pre>
    </div>
  );
};
