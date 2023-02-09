import React, { useContext, useEffect, useState } from "react";
import AllTransaction from "../components/AllTransaction";
import Deposits from "../components/Deposits";
import WithDraws from "../components/WithDraws";
import { Context } from "../context/UserContext";

const Dashboard = () => {
  let { user, logoutUser, withDrawAmount } = useContext(Context);
  let [name, setName] = useState("");
  let [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center mt-2 text-center">
        <div class="spinner-border " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="row vh-100 bg-light">
      <div className="col-md-8 px-4 py-2 ">
        <div className="d-flex justify-content-between mt-2 align-items-center ">
          <h3 className="fw-bold ">PayPal</h3>
          {/* <div class="dropdown dropstart">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </li>
              
            </ul>
          </div> */}
          <div class="btn-group dropstart">
            <img
              style={{ cursor: "pointer" }}
              src={user.picture}
              className=" person-img dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              alt={user.name}
            />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button
                  class="dropdown-item"
                  type="button"
                  onClick={() => logoutUser()}
                >
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </div>
        <h4 className="fw-bold pt-4">Good Morning {user.name}</h4>
        <div className="d-flex justify-content-between align-items-center bg-success text-white fs-3 fw-bold px-3 mt-4 rounded py-4">
          <div>Your Total Balance</div>
          <div>{user.totalBalance}$</div>
        </div>
        <div className="d-flex">
          <div
            className="d-flex "
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className=" p-3 sendCard bg-secondary bg-opacity-25 px-5 border mt-4 text-white rounded text-center">
              <i className="fa-solid fs-2 mb-3 fa-plane d-block"></i>
              <span>Send</span>
            </div>
          </div>
          <div className="d-flex ms-3" style={{ cursor: "pointer" }}>
            <div className=" p-3 sendCard bg-secondary px-5 bg-opacity-25 border mt-4 text-white rounded text-center">
              <i className="fa-solid fs-2 mb-3 d-block fa-landmark"></i>
              <span>Loan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4 p-3 border-start">
        <div className="mt-2 d-flex pe-3 justify-content-between align-items-center">
          <span className="fw-bold fs-4">Transactions</span>
          <span className="fs-5 fw-bold cursor-pointer">
            <i className="fa-solid fa-sort me-2"></i>sort
          </span>
        </div>
        <div className="w-100 pt-3">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Deposits
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                WithDraws
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <AllTransaction />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <Deposits />{" "}
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              <WithDraws />
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                WithDraw Money
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">
                  Amount
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-success"
                onClick={(e) => {
                  e.preventDefault();
                  if (name == "" || name.trim() == "") {
                    alert("Please Enter a Valid Name");
                  } else if (amount == "" || amount.trim() == "") {
                    alert("Pleasse Enter amount");
                  } else {
                    withDrawAmount(name, amount);
                  }
                }}
              >
                Deposit Money
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
