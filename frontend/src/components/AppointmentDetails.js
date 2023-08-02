import { useAppointmentContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const AppointmentDetails = ({ appointment }) => {
  const { dispatch } = useAppointmentContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/appointments/" + appointment._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_APPOINTMENT", payload: json });
    }

    window.location.reload(true);
  };

  return (
    <div className="appointment-details">
      <h4>{appointment.name}</h4>
      <p>
        <strong>Gender: </strong>
        {appointment.gender}
      </p>
      <p>
        <strong>Age: </strong>
        {appointment.age}
      </p>
      <p>
        <strong>Date of Birth: </strong>
        {appointment.date_of_appt &&
          new Date(appointment.date_of_appt).toLocaleDateString()}
      </p>
      <p>
        <strong>Department: </strong>
        {appointment.department}
      </p>
      <p>
        <strong>Date of Appointment: </strong>
        {appointment.date_of_appt &&
          new Date(appointment.date_of_appt).toLocaleDateString()}
      </p>
      <p>
        {formatDistanceToNow(new Date(appointment.createdAt), {
          addSuffix: true,
        })}
      </p>
      <span className="material-symbol-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default AppointmentDetails;
