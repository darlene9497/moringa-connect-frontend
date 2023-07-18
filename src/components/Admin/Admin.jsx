import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Link to="/userlist">
            <Card className="bg-primary text-white">
              <Card.Header>
                <h3 className="mb-0"> <i class="bi bi-people"></i> Users</h3>
              </Card.Header>
              <Card.Body>
                <p className="mb-0">Manage user accounts and access to the website.</p>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/projectlist">
            <Card className="bg-success text-white">
              <Card.Header>
                <h3 className="mb-0"><i class="bi bi-wrench-adjustable-circle"></i> Projects</h3>
              </Card.Header>
              <Card.Body>
                <p className="mb-0">Manage and keep track of the status of each project.</p>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/eventlist">
            <Card className="bg-info text-white">
              <Card.Header>
                <h3 className="mb-0"><i class="bi bi-cup-straw"></i> Events</h3>
              </Card.Header>
              <Card.Body>
                <p className="mb-0">Manage and keep track of event schedules.</p>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
