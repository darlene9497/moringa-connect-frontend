import React from 'react';
import { Card, CardHeader, CardBody } from 'reactbootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Link to="/userlist">
            <Card className="bg-primary text-white">
              <CardHeader>
                <h3 className="mb-0">Users</h3>
              </CardHeader>
              <CardBody>
                <p className="mb-0">Manage user accounts and access to the website.</p>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/projectlist">
            <Card className="bg-success text-white">
              <CardHeader>
                <h3 className="mb-0">Projects</h3>
              </CardHeader>
              <CardBody>
                <p className="mb-0">Manage and keep track of the status of each project.</p>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/eventlist">
            <Card className="bg-info text-white">
              <CardHeader>
                <h3 className="mb-0">Events</h3>
              </CardHeader>
              <CardBody>
                <p className="mb-0">Manage and keep track of event schedules.</p>
              </CardBody>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
