import React from "react";
import ContentWrapper from "./ContentWrapper";
import CategoriesInDb from "./CategoriesInDb";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import Chart from "./Chart";
import LastUserInDb from "./LastUserInDb";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            {/* <img className="w-100" src={image} alt="Digital House" /> */}
            <h1>
              <i className={`fas fa-pizza-slice fa-2x text-gray-300`}></i> Orsai
            </h1>
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard - Orsai</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categories</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/last-user-in-db">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Last User</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/products">
            <i className="fas fa-fw fa-table"></i>
            <span>Products</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route path="/categories">
          <CategoriesInDb />
        </Route>
        <Route path="/last-user-in-db">
          <LastUserInDb />
        </Route>
        <Route path="/products">
          <Chart />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
