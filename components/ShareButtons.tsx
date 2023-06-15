import { abide } from "@utils/constants";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CopiedNotif from "./CopiedNotif";
import { FaFacebookF, FaLink, FaTwitter } from "react-icons/fa";

const ShareButtons = () => {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const blogURL = abide.siteUrl + router.asPath;

  return (
    <div className='space-y-1'>
      <span className='font-sans text-xs lg:text-sm text-muted'>
        Share This:
      </span>
      <div className='flex items-center gap-x-4'>
        <a
          aria-label='Share to Facebook'
          className='cursor-pointer text-muted transition-colors duration-200 hover:text-[#1877f2]'
          href={`https://www.facebook.com/sharer/sharer.php?u=${blogURL}`}
        >
          <FaFacebookF size={16} />
        </a>
        <a
          aria-label='Share to Twitter'
          className='cursor-pointer text-muted transition-colors duration-200 hover:text-[#1da1f2]'
          href={`https://twitter.com/intent/tweet?url=${blogURL}`}
        >
          <FaTwitter size={16} />
        </a>
        <CopyToClipboard text={blogURL} onCopy={() => setCopied(true)}>
          <button
            aria-label='Copy Link'
            className='text-muted transition-colors duration-200 hover:text-accent'
          >
            <FaLink size={16} />
          </button>
        </CopyToClipboard>
      </div>
      <CopiedNotif copied={copied} setCopied={setCopied} />
    </div>
  );
};

export default ShareButtons;
