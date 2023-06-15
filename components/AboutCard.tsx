import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Card from "./Card";

function AboutCard() {
  return (
    <Card className='flex flex-col gap-6 items-center'>
      <div className='flex gap-3 items-center'>
        <Image
          src='/abide-logo.png'
          alt='Abide in the Vine'
          height={24}
          width={24}
        />
        <span className='text-2xl font-semibold'>Abide.</span>
      </div>
      <p className='text-muted text-center'>
        Abide in the Vine is a Christian organization which aims to glorify God
        by proclaiming the truth that satisfaction and joy can only be found in
        Jesus Christ.
      </p>
      <SocialLinks />
    </Card>
  );
}

export default AboutCard;
