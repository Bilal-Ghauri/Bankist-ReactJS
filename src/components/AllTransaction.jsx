import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/UserContext";

const AllTransaction = () => {
  let { user } = useContext(Context);
  let fullTransactions = [
    ...user.Transactions.deposit,
    ...user.Transactions.withdraw,
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <div className="w-100 mt-2 text-center">
        <div class="spinner-border " role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      {fullTransactions.map((t) => {
        return (
          <div
            key={t.id}
            className="d-flex mb-3 justify-content-between align-items-center p-1"
          >
            <div className="d-flex  align-items-center">
              <img
                src={t.picture}
                alt={t.name}
                className= 'person-img'
                style={{ height: "40px" }}
              />
              <h6 className="ms-2 mb-0">{t.name}</h6>
            </div>
            <div
              className={
                t.category === "Deposit"
                  ? "rounded-pill bg-success px-3 py-1 text-white d-flex  align-items-center"
                  : "rounded-pill bg-danger px-3 py-1 text-white d-flex  align-items-center"
              }
            >
              <span>{t.category}</span>
            </div>
            <div className="amount">{t.amount}$</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTransaction;
