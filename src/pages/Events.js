import "bootstrap/dist/css/bootstrap.min.css";
import { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const { data: eventData = [], loading, error } = useFetch("http://localhost:3006/events");


  useEffect(() => {
    if (eventData && filteredEvents !== eventData) {
      setFilteredEvents(eventData);
    }
  }, [eventData]);

  // Handle type filter
  useEffect(() => {
    if (!isSearchActive && eventData) {
      setFilteredEvents(
        selectedType === "All"
          ? eventData
          : eventData.filter((event) => event.type === selectedType)
      );
    }
  }, [selectedType, isSearchActive]);

  // Handle search button click
  const handleSearch = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const searchFiltered = eventData.filter(
      (event) =>
        event.title.toLowerCase().includes(lowercasedQuery) ||
        (event.eventTags &&
          event.eventTags.toLowerCase().includes(lowercasedQuery))
    );

    setFilteredEvents(searchFiltered);
    setSearchQuery(""); // Clear input
    setIsSearchActive(true); // Mark search as active
  };

  // View all events on click of button
  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearchActive(false);
    setFilteredEvents(
      selectedType === "All"
        ? eventData
        : eventData.filter((event) => event.type === selectedType)
    );
  };

   // function to fetch data

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error}</p>;
   if (!eventData) return <p>No events found.</p>;
   

  return (
    <div className="bg-black" style={{ minHeight: "100vh" }}>
      <div className="container pt-4">
        <h1 className="text-warning fst-italic">Meetup Events</h1>

        {/* Dropdown for type filter and search query bar alongwith button */}
        <div className="d-flex justify-content-between pt-3">
          <select
            className="form-control w-auto border border-danger text-danger-emphasis fw-bold shadow-sm"
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="" disabled>
              Select Event Type
            </option>
            <option value="All">All Events</option>
            <option value="Online event">Online Events</option>
            <option value="Offline event">Offline Events</option>
          </select>

          <div>
            <input
              className="m-2"
              type="search"
              placeholder="Search by title or tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {!isSearchActive ? (
              <button
                className="btn btn-outline-success m-2"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            ) : (
              <button
                className="btn btn-outline-success m-2"
                type="button"
                onClick={handleClearSearch}
              >
                Back
              </button>
            )}
          </div>
        </div>

        {/* cards for each event with image, title and time using map*/}

        <div className="row">
          {filteredEvents.map((event) => (
            <div key={event._id} className="col-12 col-md-4 my-4">
              <Link
                to={`/eventDetails/${event._id}`}
                className="text-decoration-none"
              >
                {/* Linked to event details page by creating card as a link. */}

                <div
                  className="card bg-secondary-subtle"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={event.imgUrl}
                    className="card-img-top img-fluid"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    alt={event.title}
                  />

                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <div className="card-img-overlay">
                      <p className="card-text badge text-bg-success ">
                        {event.type}
                      </p>
                    </div>
                    <div className="card-footer">
                      <small className="text-body-secondary">
                        <strong>Timings: </strong>
                        {event.dateAndTime}
                      </small>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
