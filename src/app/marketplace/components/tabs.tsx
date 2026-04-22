"use client";

import styles from "../styles/marketplace.module.css";

type ModuleTab = {
  id: string;
  label: string;
  icon: string;
};

type TabsProps = {
  moduleTabs: ModuleTab[];
  activeModule: string;
  onModuleChange: (id: string) => void;
  subTabs: string[];
  activeSubTab: string;
  onSubTabChange: (tab: string) => void;
};

export default function Tabs({
  moduleTabs,
  activeModule,
  onModuleChange,
  subTabs,
  activeSubTab,
  onSubTabChange,
}: TabsProps) {
  return (
    <div className={styles.tabsWrapper}>
      {/* Module tabs row */}
      <div className={styles.moduleTabs}>
        {moduleTabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.moduleTab} ${activeModule === tab.id ? styles.moduleTabActive : ""}`}
            onClick={() => onModuleChange(tab.id)}
          >
            <span className={styles.moduleTabIcon}>{tab.icon}</span>
            <span className={styles.moduleTabLabel}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Sub-tabs row */}
      <div className={styles.subTabs}>
        {subTabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.subTab} ${activeSubTab === tab ? styles.subTabActive : ""}`}
            onClick={() => onSubTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
