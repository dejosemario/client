import PageTitle from "../molecules/PageTitle";
import EventForm from "../molecules/EventForm";

export default function EventCreate() {
  
  return (
    <div>
      <PageTitle title="Create Event" />

      <div className="mt-5">
        <EventForm type="create" initialData={{}} />
      </div>
    </div>
  );
}

