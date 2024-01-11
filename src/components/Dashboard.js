import React, { Component } from "react";
import Loading from "./Loading";

import classnames from "classnames";

class Dashboard extends Component {
  state = {
    loading: false,
  };

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    return <main className={dashboardClasses} />;
  }
}

export default Dashboard;
