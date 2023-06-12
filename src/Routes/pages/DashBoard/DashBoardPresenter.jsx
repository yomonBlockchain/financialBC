import React, { useEffect } from "react";
import "../../../css/main.css";
import { MintAPI } from "API";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
const API_KEY = process.env.REACT_APP_API_KEY;

const columns = [
  { field: "blockNumber", headerName: "BlockNum", width: 200 },
  {
    field: "timeStamp",
    headerName: "timestamp",
    width: 200,
    editable: true,
  },
  {
    field: "blockHash",
    headerName: "Block Hash",
    width: 200,
    editable: true,
  },
  {
    field: "methodId",
    headerName: "methodId",
    width: 200,
    editable: true,
  },
  {
    field: "to",
    headerName: "to",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "from",
    headerName: "from",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

console.log(API_KEY);
const DashBoardPresenter = () => {
  /* Router */
  /* State */
  const [nftTx, setNftTx] = useState([]);
  const [tokenTx, setTokenTx] = useState([]);
  /* Hooks */
  const address = "0x358b54073E0D4E2701d7565806094a1617916C3A";
  const tokenAddress = "0x82e3BE8c5Bc45c10A97199C24Fca4cbC5c6e53BD";
  useEffect(() => {
    const nftList = async (address) => {
      const result = await MintAPI.getTxByAddress(address);
      console.log(result);
      setNftTx(result);
    };
    const tokenList = async (tokenAddress) => {
      const result = await MintAPI.getTxByAddress(tokenAddress);
      console.log(result);
      setTokenTx(result);
    };
    tokenList(tokenAddress);
    nftList(address);
  }, []);
  console.log(nftTx);
  /* Functions */
  /* Render */
  const rows = [...new Array(nftTx.length)].map((i, idx) => {
    const result = { ...nftTx[idx], id: idx };
    return result;
  });

  const tokenRows = [...new Array(tokenTx.length)].map((i, idx) => {
    const result = { ...tokenTx[idx], id: idx };
    return result;
  });
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <h1>NFT Transaction Info</h1>
      </div>
      <div className="dashboard-content-container">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <div className="dashboard-title" style={{ marginTop: 20 }}>
          <h1>Patrol Token Transaction Info</h1>
        </div>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={tokenRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default DashBoardPresenter;
