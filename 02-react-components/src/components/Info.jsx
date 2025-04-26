function Info() {
  let name = "John Doe";
  let age = () => {
    return 25;
  };

  return (
    <>
      <p>
        Hi, My Name is {name}. <br /> My age is {age()}{" "}
      </p>
    </>
  );
}

export default Info;
