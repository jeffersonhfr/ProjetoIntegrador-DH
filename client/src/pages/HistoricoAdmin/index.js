import React, { useState } from "react";
import AdminHistoryCard from "../../components/AdminHistoryCard";

const HistoricoAdmin = ({ orders }) => {
  const [isLogado, setIsLogado] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      <div className="container container-historico">
        <div className="title-bar">
          <h1>Todos os Pedidos </h1>
        </div>
        {isLogado && isAdmin ? (
          <>
            {orders.map((orders) => (
              <AdminHistoryCard />
            ))}

            {/* <%- include('./partials/admin-history-card') %> */}
          </>
        ) : null}
      </div>
    </>
  );
};
export default HistoricoAdmin;
