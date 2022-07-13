import React from "react";
import "./dashboard.css";
import { BsCart4, BsFillArrowRightCircleFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { FaUsers, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Order from "./Order";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "orange" : "#308fe8",
  },
}));

const Dashboard = () => {
  let Navigate = useNavigate();

  return (
    <div className="dashboard">
      <h4 className="title">Welcome,</h4>
      <div className="values">
        <div className="product-card">
          <div className="card-items">
            <i className="dashboard-icon">
              <BsCart4 />
            </i>
            <div>
              <h3 className="card-heading">548</h3>
              <span className="card-title">Total Products</span>
            </div>
          </div>
          <button className="card-button" onClick={() => Navigate("/products")}>
            View Products <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="order-card">
          <div className="card-items">
            <i className="dashboard-icon">
              <ImStatsBars />
            </i>
            <div>
              <h3 className="card-heading">84</h3>
              <span className="card-title">Total Orders</span>
            </div>
          </div>
          <button className="card-button" onClick={() => Navigate("/order")}>
            View Orders <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="user-card">
          <div className="card-items">
            <i className="dashboard-icon">
              <FaUsers />
            </i>
            <div>
              <h3 className="card-heading">2546</h3>
              <span className="card-title">Total Users</span>
            </div>
          </div>
          <button className="card-button" onClick={() => Navigate("/users")}>
            View Users <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="store-card">
          <div className="card-items">
            <i className="dashboard-icon">
              <FaStore />
            </i>
            <div>
              <h3 className="card-heading">21</h3>
              <span className="card-title">Total Stores</span>
            </div>
          </div>
          <button className="card-button" onClick={() => Navigate("/stores")}>
            View Stores <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
      <br />
      <div className="card stats23">
        <h5> Recent Orders Requested</h5>
        <button className="btn  orders23" onClick={() => Navigate("/order")}>View All</button>
        <hr />
        <table>
          <thead>
            <tr>
              &nbsp;&nbsp;
              <th>Food Item</th>
              <th>Price</th>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <th>Product Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>{" "}
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>{" "}
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>{" "}
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>
            <tr>
              &nbsp;&nbsp;
              <td>1</td>
              <td>Mark</td>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="card stats34">
        <h5>Monthly Revenue</h5>
        <select class="form-select" aria-label="Default select example">
          <option selected>January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">may</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>

        <h6>Week 1</h6>
        <Box>
          <BorderLinearProgress variant="determinate" value={20} />
        </Box>
        <br />
        <h6>Week 2</h6>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={30} /> <br />
        </Box>
        <h6>Week 3</h6>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
        <br />
        <h6>Week 4</h6>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={70} />
        </Box>
        <br />
      </div>
       <div className="card  recomendation"><Order/></div> 
       
    </div>
  );
};

export default Dashboard;
