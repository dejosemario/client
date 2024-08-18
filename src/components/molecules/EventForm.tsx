import { Form, Steps, message } from "antd";
import General from "./General";
import LocationDate from "./LocationDate";
import Media from "./Media";
import TicketQrCode from "./TicketQrCode";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import uploadFileAndReturnUrl from "../../api/storageService";
import { createEvent, updateEvent } from "../../api/eventService";

export interface EventFormStepProps {
  eventData: any;
  setEventData: any;
  setCurrentStep: any;
  currentStep: number;
  selectedMediaFiles?: any;
  setSelectedMediaFiles?: any;
  loading?: boolean;
  onFinish?: any;
}

export default function EventForm({
  initialData = {},
  type = "create",
}: {
  initialData?: any;
  type?: "create" | "edit";
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventData, setEventData] = useState<any>(initialData);
  const [selectedMediaFiles, setSelectedMediaFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params: any = useParams();

  const onFinish = async () => {
    try {
      setLoading(true);
      const [...urls] = await Promise.all(
        selectedMediaFiles.map(async (file: any) => {
          return await uploadFileAndReturnUrl(file);
        })
      );
      eventData.media = [...(eventData?.media || []), ...urls];
      if (type === "edit") {
        await updateEvent(params.id, eventData);
        message.success("Event updated successfully");
      } else {
        const response = await createEvent(eventData);
        if (response.success) {
          message.success("Event created successfully");
        } else {
          message.error(response.message);
        }
      }

      navigate("/creator/events");
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const commonProps = {
    eventData,
    setEventData,
    setCurrentStep,
    currentStep,
    selectedMediaFiles,
    setSelectedMediaFiles,
    loading,
    setLoading,
    onFinish,
  };

  const stepsData = [
    {
      name: "General",
      component: <General {...commonProps} />,
    },
    {
      name: "Location And Date",
      component: <LocationDate {...commonProps} />,
    },
    {
      name: "Media",
      component: <Media {...commonProps} />,
    },
    {
      name: "Tickets",
      component: <TicketQrCode {...commonProps} />,
    },
  ];

  return (
    <Form layout="vertical">
      <Steps current={currentStep} onChange={(step) => setCurrentStep(step)}>
        {stepsData.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.name}
            className="text-xs"
            disabled={index > currentStep}
          />
        ))}
      </Steps>

      <div className="mt-5">{stepsData[currentStep].component}</div>
    </Form>
  );
}
