import { useRef } from "react";

export default function UseRefEx() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  function updateRef(refType, type) {
    if (refType.current && type === "AutoFocus") {
      refType.current.focus();
    }

    if (refType.current && type === "changeText") {
      refType.current.textContent = "UseRef has been used to update data";
    }
  }

  console.log("ref");

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">UseRef Example 1</h5>
            </div>
            <div className="card-body">
              <div className="card-text">
                <div className="fw-bold">UseRef to autofocus</div>
                <input
                  type="text"
                  className="form-control w-100 my-3"
                  ref={ref1}
                />
              </div>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => updateRef(ref1, "AutoFocus")}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">UseRef Example 2</h5>
            </div>
            <div className="card-body">
              <p className="card-text" ref={ref2}>
                Vestibulum eget ligula sed arcu vehicula pellentesque non nec
                lectus. Fusce dignissim felis ac fringilla ultricies.
              </p>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => updateRef(ref2, "changeText")}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">UseRef Example 3</h5>
            </div>
            <div className="card-body">
              <p className="card-text" ref={ref3}>
                Integer at fermentum justo. Vivamus blandit erat non malesuada
                tincidunt. Proin nec risus ut nisi varius facilisis.
              </p>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => updateRef}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
