import './BreederDetail.css';

export default function BreederDetail({ breeder }) {
  return (
    <div className="container breeder-detail-container">
      <h1 className="text-center mb-4">{breeder.orgName}</h1>
      <div className="card p-4">
        <div className="row">
          <div className="col">
            <div className="breeder-details">
              <div className="breeder-info">
                <h4 className="text-center mb-2 breeder-detail-title">Breeds Available:</h4>
                <p className="text-center">{breeder.breed}</p>
                <h4 className="text-center mb-2 breeder-detail-title">Address:</h4>
                <p className="text-center">
                  {breeder.address} <br />
                  {breeder.city},{breeder.state}, {breeder.zipCode}
                </p>
                <h4 className="text-center mb-2 breeder-detail-title">Phone Number:</h4>
                <p className="text-center">{breeder.phone}</p>
                <h4 className="text-center mb-2 breeder-detail-title">Website:</h4>
                <p className="text-center">
                  <a
                    href={breeder.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {breeder.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
