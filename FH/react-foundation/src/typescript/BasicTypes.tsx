export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 37;
  const isActive = true;
  const powers: string[] = ["React", "ReactNative", "Angular", "Qwik"];

  return (
    <div>
      <h3>Tipos Basicos</h3>
      {name} {age} {isActive ? "true" : "false"}
      <br />
      {powers}
    </div>
  );
};
