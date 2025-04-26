function Additem1() {
  let task = "Go to College";
  let date = "12-30-2028";

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
            <button class="btn btn-danger my-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Additem1;
