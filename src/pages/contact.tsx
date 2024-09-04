import { useEffect, useState } from 'react';
import { NewContact } from '../types/contact';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactMeSchema } from '../validators/validators';
import { SiMinutemailer } from 'react-icons/si';
import IconWithText from '../lib/styledIconText';
import { CloseModal } from '../components/modalClose';
import React from 'react';

export const Contact = () => {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting },
  } = useForm<NewContact>({ resolver: zodResolver(ContactMeSchema) });

  //our modal/dialog management start with closed
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>("")
  const closeModal = () => {
    setIsOpen(false);
  }

  const onSubmit = (data: NewContact) => {
    setDisplayText(`Thank you ${data.name} for the message. 
    At this time, your contact info and associated message is
    not stored so don't take offense at being ghosted.`)
    setIsOpen(true);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', email: '', message: ''});
    }
  }, [formState, reset]);
  
  return (
    <section
      id='contact'
      className='flex flex-wrap flex-col mt-10 w-full content-center '>
      <h1 className='text-4xl font-bold text-center drop-shadow-abc mb-10'>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}
        className='mt-4 content-around flex flex-col w-1/3'
      >
        <input
          {...register('name')}
          placeholder='Your Name Here'
          autoComplete='name'
          className={inputclass}
        />
        {errors.name && (
          <p className={errclass}>{`${errors.name.message}`}</p>
        )}
        <input
          {...register('email')}
          placeholder='Your email here'
          autoComplete='email'
          className={inputclass}
        />
        {errors.email && (
          <p className={errclass}>{`${errors.email.message}`}</p>
        )}
        <textarea
          rows={5}
          cols={2}
          {...register('message')}
          onChange={(e) => setCount(e.target.value.length)}
          placeholder='A friendly message here'
          className={inputclass}
        />
        <div>
          <p className='drop-shadow-abc text-center'>Current chars: {count}</p>
        </div>
        {errors.message && (
          <p className={errclass}>{`${errors.message.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          className={btnclass}
          type='submit'>
            <IconWithText icon={SiMinutemailer} iconClass={'fill-redish mb-1 ml-4 mr-2 translate-y-1'} text={'Submit'} txtClass={'font-extrabold text-bluish-dark'}/>
        </button>
      </form>
      <CloseModal displayText={displayText} isOpen={isOpen} onClose={closeModal} children={<></>}/>
    </section>
  );
};


const inputclass= `w-full rounded-md border border-greenish-light p-2 mb-2 text-sm 
placeholder:text-bluish-dark shadow-md shadow-pinkish focus:outline focus:outline-greenish-light focus:outline-2`
const errclass = 'text-redish font-bold text-center'
const btnclass = `flex font-bold m-2 mt-3 p-1 rounded bg-bluish disabled:bg-opacity-95 
shadow-md shadow-pinkish justify-center hover:shadow-md hover:shadow-redish`