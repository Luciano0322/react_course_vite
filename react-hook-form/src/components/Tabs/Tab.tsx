import * as React from "react";
import { useTabs } from "./Tabs";

export interface ITabProps {
  /**
   * Unique label of Tab to show when clicked.
   */
  label: string;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<React.PropsWithChildren<ITabProps>> = props => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <div 
      className={activeTab === props.label ? `border-b-2 border-red-400` : ``}
    >
      <button onClick={() => setActiveTab(props.label)}>
        {props.children}
      </button>
    </div>
  );
};
