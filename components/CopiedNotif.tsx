import { cn } from "@utils/helpers";
import useTimeout from "@utils/hooks/useTimeout";

interface CopiedNotifProps {
  copied: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const CopiedNotif = (props: CopiedNotifProps) => {
  const { copied, setCopied } = props;

  const closeCallback = () => {
    if (!copied) return;
    setCopied(false);
  };

  useTimeout(closeCallback, 3000, copied);

  const copyAlertClass = cn(
    "bg-brand-gray500 text-white font-semibold font-main shadow-sm px-8 py-2 text-sm duration-200 transition-transform rounded-full dark:bg-slate-800",
    {
      "translate-y-0 opacity-1": copied,
      "translate-y-6 opacity-0": !copied,
    }
  );
  return <div className={copyAlertClass}>Link copied!</div>;
};

export default CopiedNotif;
