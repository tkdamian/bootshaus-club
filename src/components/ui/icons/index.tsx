import { FC } from "react";

type AppIconType = {
  name: string;
};

const AppIcon: FC<AppIconType> = (props) => {
  const { name } = props;
  return <span className="material-symbols-outlined">{name}</span>;
};

export const CalendarMonthIcon = () => {
  return <AppIcon name="calendar_month" />;
};

export const FormatListBulletedIcon = () => {
  return <AppIcon name="format_list_bulleted" />;
};

export const GridViewIcon = () => {
  return <AppIcon name="grid_view" />;
};

export const SearchIcon = () => {
  return <AppIcon name="search" />;
};

export const ScheduleIcon = () => {
  return <AppIcon name="schedule" />;
};

export const LocationOnIcon = () => {
  return <AppIcon name="location_on" />;
};

export const ConfirmationNumberIcon = () => {
  return <AppIcon name="confirmation_number" />;
};

export const InfoIcon = () => {
  return <AppIcon name="info" />;
};

export const ChevronRight = () => {
  return <AppIcon name="chevron_right" />;
};

export default AppIcon;
