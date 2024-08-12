import { Button, Form, Input } from "antd";
import { EventFormStepProps } from "../organisms/EventForm";

function LocationAndDate({
  eventData,
  setEventData,
  setCurrentStep,
  currentStep,
}: EventFormStepProps) {
  // const handleFieldChange = (field: string, value: string) => {
  //   //update the specific field in the event
  //   const updatedEventData = { ...eventData, [field]: value };

  //   //combine address, city, and state into  a single location
  //   const location = `${updatedEventData.address || ""}, ${
  //     updatedEventData.city || ""
  //   }, ${updatedEventData.state || ""}`.trim();

  //   setEventData({ ...updatedEventData, location });
  // };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Form.Item label="Address">
        <Input
          placeholder="Address"
          value={eventData.address}
          onChange={(e) =>
            setEventData({ ...eventData, address: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item label="City">
        <Input
          placeholder="City"
          value={eventData.city}
          onChange={(e) => setEventData({ ...eventData, city: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="State">
        <Input
          placeholder="State"
          value={eventData.state}
          onChange={(e) => setEventData({ ...eventData, state: e.target.value })}
        />
      </Form.Item>

      <Form.Item label="Start Date">
        <Input
          placeholder="Start Date"
          value={eventData.date}
          type="date"
          onChange={(e) =>
            setEventData({ ...eventData, startDate: e.target.value })
          }
          min={new Date().toISOString().split("T")[0]}
        />
      </Form.Item>

      <Form.Item label="End Date (Not Compulsory)">
        <Input
          placeholder="End Date"
          value={eventData.date}
          type="date"
          onChange={(e) =>
            setEventData({ ...eventData, endDate: e.target.value })
          }
          min={eventData.startDate || new Date().toISOString().split("T")[0]}
        />
      </Form.Item>

      <Form.Item label="Time">
        <Input
          placeholder="Time"
          value={eventData.time}
          type="time"
          onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
        />
      </Form.Item>

      <div className="flex justify-between col-span-3">
        <Button onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
        <Button
          type="primary"
          onClick={() => setCurrentStep(currentStep + 1)}
          disabled={
            !eventData.address ||
            !eventData.city ||
            !eventData.state ||
            !eventData.startDate ||
            !eventData.time
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default LocationAndDate;
