function Additem2() {
  let task = "Buy Milk";
  let date = "09-25-2025";

  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <p>{task}</p>
          </div>
          <div class="col-4">
            <p>{date}</p>
          </div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additem2;
