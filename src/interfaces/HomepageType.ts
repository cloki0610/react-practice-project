import { Dispatch, SetStateAction } from "react";

export type NavLinkType = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  mobile?: boolean;
  mobileToggle?: Dispatch<SetStateAction<boolean>>;
};

export type DropDownType = NavLinkType & {
  title: string;
};

export type ServiceCardType = {
  index: number;
  title: string;
  icon: string;
};

export type ExperienceCardType = {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
};

export type ProjectCardType = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};
