export type CalButtonProps = {
  action: string;
  onClick: () => void;
};

export type ResultProps = { result: string };

export type CalState = { calcProgress: string };

export type CalAction = { type: string };
