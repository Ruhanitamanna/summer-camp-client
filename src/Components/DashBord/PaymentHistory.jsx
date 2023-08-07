import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const [payment, setPayment] = useState();

  useEffect(() => {
    axiosSecure.get("/payments").then((res) => {
      console.log(res.data);
      setPayment(res.data);
    });
  }, []);

  return (
    <div className="p-4 m-4 rounded">
      <div className="text-center my-4 p-6">
        <h1 className="text-4xl uppercase font-semibold">payment history</h1>
      </div>
      <div className="divider"></div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-blue-200 rounded">
              <th></th>
              <th>Email</th>
              <th>Class Name</th>
              <th>Price </th>
              <th>Payment Date </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payment &&
              payment.map((p, index) => (
                <tr key={p.id} className=" p-2 bg-base-200">
                  <th>{index + 1}</th>
                  <td>{p.email}</td>
                  <td>{p.className}</td>
                  <td>{p.price}</td>
                  <td>{p.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
