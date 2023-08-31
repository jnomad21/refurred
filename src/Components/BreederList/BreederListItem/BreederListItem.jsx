import React from 'react';
import { Link } from 'react-router-dom';
import './BreederListItem.css';

export default function BreederListItem({ breeder }) {
  return (
    <div className="col-md-12 d-flex justify-content-center mb-4">
      <div className="card breeder-card-fluid breeder-list-card">
        <div className="card-body">
          <h5 className="card-title mt-0">
            <Link className="breeder-links" to={`/dogs/breeders/${breeder._id}`}>
              {breeder.orgName}
            </Link>
          </h5>
          <h5>Breeds: {breeder.breed}</h5>
          <h5>Location: {breeder.state}</h5>
          {/* <h5>
            <a href={breeder.website} rel="noreferrer" target="_blank">
              Website
            </a>
          </h5> */}

          <Link className="btn btn-success" to={`/dogs/breeders/${breeder._id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
}
