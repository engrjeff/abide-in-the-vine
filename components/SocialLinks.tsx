import { abide } from "@utils/constants";
import { FaFacebookF, FaInstagram, FaMedium, FaYoutube } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className='flex items-center gap-3'>
      <a
        href={abide.facebook}
        target='_blank'
        rel='noreferrer'
        aria-label='Abide Facebook'
        className='transition-colors hover:text-accent'
      >
        <FaFacebookF />
      </a>
      <a
        href={abide.instagram}
        target='_blank'
        rel='noreferrer'
        aria-label='Abide Instagram'
        className='transition-colors hover:text-accent'
      >
        <FaInstagram />
      </a>
      <a
        href={abide.medium}
        target='_blank'
        rel='noreferrer'
        aria-label='Abide Medium'
        className='transition-colors hover:text-accent'
      >
        <FaMedium />
      </a>
      <a
        href={abide.youtube}
        target='_blank'
        rel='noreferrer'
        aria-label='Abide Youtube'
        className='transition-colors hover:text-accent'
      >
        <FaYoutube />
      </a>
    </div>
  );
}

export default SocialLinks;
