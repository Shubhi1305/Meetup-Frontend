import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const EventDetails = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { data: event, loading, error } = useFetch(
    `http://localhost:3006/events/${eventId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>Event not found</p>;

  return (
    <div className="bg-black py-5">
      <div className="container text-light">
        {/* heading */}
        <h1 className="text-warning fw-bolder">{event.title}</h1>

        <div className="row">
          {/* created columns to display image on one side and details on other */}
          <div className="col col-md-4">
            <p className="mb-5">
              Hosted By: <strong>{event.hostedBy}</strong>
            </p>
            <div className="bg-body-secondary p-4 text-dark border border-success border-4">
              <img
                src={event.imgUrl}
                className="img-fluid w-100 my-3"
                style={{ maxHeight: "275px", objectFit: "cover" }}
                alt={event.title}
              />

              {/* displayed schedule, location, and tags below image */}
              <h5>Schedule: </h5>
              <p> 📅 {event.dateAndTime}</p>

              <h5>Location: </h5>
              <p> 📌 {event.location}</p>

              <h5>Event Tags: </h5>
              {event.eventTags
                ? event.eventTags.split(",").map((tag, index) => (
                    <span key={index} className="badge text-bg-primary me-2">
                      {tag.trim()}
                    </span>
                  ))
                : "No tags available"}
            </div>
          </div>

          {/* other column for details */}
          <div className="col-md-8">
            <div className="bg-body-secondary border border-secondary border-4 text-dark p-4 m-5">
              <h2 className="py-2">Details: </h2>
              <p className="fs-5">
                {event.details
                  ? event.details.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))
                  : "No details available"}
              </p>
            </div>

            {/* additional info */}
            <div className="mx-5 fs-5 bg-body-secondary border border-warning border-4 text-dark p-5">
              <h5>Additional Information: </h5>

              <ul>
                <li>
                  <strong>Dress Code: </strong>
                  {event.dressCode || "Not specified"}
                </li>

                <li>
                  <strong>Age Restrictions: </strong>
                  {event.ageRestrictions || "No restrictions"}
                </li>

                <li>
                  <strong>Fees: ₹ </strong>
                  {event.fees !== undefined ? event.fees : "Free"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 d-flex">
          <button className="btn btn-outline-warning" onClick={() => navigate(-1)}>
            Back to Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
