import { ReactNode } from "react";

interface Props2 {
  children: ReactNode;
  color: "primary" | "secondary" | "success" | "warning";
  onClose: () => void;
}

const Alert = ({ children, color, onClose }: Props2) => {
  return (
    <div className={"alert alert-" + color + " alert-dismissible fade show"}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
