
import PageTitle from "../atoms/pageTitle";
import EventForm from "../molecules/EventForm";

interface UserRoleChangeProps {
    handleSubmit: () => Promise<boolean>;
  }
  
  export default function UserRoleChange({
    handleSubmit,
  }: UserRoleChangeProps) {
  
  return (
    <div>
      <PageTitle title="Create Event" />

      <div className="mt-5">
        <EventForm type="roleChange" initialData={{}} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

