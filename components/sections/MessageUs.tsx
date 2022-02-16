import React from "react";
import Image from "next/image";
import SectionTitle from "@components/SectionTitle";

import AbideSideLogo from "@assets/logo-side.svg";
import AppButton from "@components/AppButton";
import SectionContainer from "@components/SectionContainer";

const MessageUs = () => {
  return (
    <SectionContainer>
      <section className='my-16 space-y-4'>
        <SectionTitle title='Message Us' />
        <div className='grid grid-cols-10'>
          <div className='space-y-8 col-span-10 md:col-span-5 z-10'>
            <p className='text-lg text-abide-dark'>
              Email us about anything such as a question or a prayer request.
            </p>
            <form className='space-y-6'>
              <div className='app-fieldset'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter your name' />
              </div>
              <div className='app-fieldset'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  placeholder='your_email@example.com'
                />
              </div>
              <div className='app-fieldset'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' placeholder='Enter your message here' />
              </div>
              <AppButton>Send</AppButton>
            </form>
          </div>
          <div className='absolute right-0'>
            <Image src={AbideSideLogo} alt='Abide in the Vine logo' />
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default MessageUs;
