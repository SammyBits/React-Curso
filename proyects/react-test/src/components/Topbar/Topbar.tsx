import React from "react";
import { TopbarProps } from "./TopbarProps";
import "./Topbar.css";
import { useDate } from "../../hooks/useDate";
export const Topbar = ({ title }: TopbarProps) => {
    const { date, time, wish } = useDate();
  return (
    <div className="topbar-main">
      <div className="topbar-title">{title}</div>
      <div className="topbar-content">
        {time}
      </div>
    </div>
  );
};
