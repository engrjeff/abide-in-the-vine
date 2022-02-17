import React from "react";
import classnames from "classnames";

type TabName = "latest-post" | "all-posts";

interface AppTabsProps {
  current: any;
  onChange: (tabName: TabName) => void;
}

const AppTabs = (props: AppTabsProps) => {
  const { current, onChange } = props;

  const getClass = (tabName: TabName) =>
    classnames("btn-tab", { active: current === tabName });

  return (
    <div className='flex items-center justify-center border-b border-abide-light'>
      <button
        className={getClass("latest-post")}
        onClick={() => onChange("latest-post")}
      >
        Latest Post
      </button>
      <button
        className={getClass("all-posts")}
        onClick={() => onChange("all-posts")}
      >
        All Posts
      </button>
    </div>
  );
};

export default AppTabs;
