import { useState, useEffect } from "react";

export const useDate = () => {
  const locale = "en";
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  let hour = today.getHours();
  const amPm = hour >= 12 ? "PM" : "AM";
  hour %= 12;
  hour = hour || 12; // Convert 0 to 12
  const time = `${hour}:${today
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${amPm}`;

  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  return {
    date,
    time,
    wish,
  };
};
