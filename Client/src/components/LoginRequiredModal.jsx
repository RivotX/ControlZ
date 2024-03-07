import React from 'react';
import Close from './Tienda/Close';

const LoginRequiredModal = () => {
    return (
        <>
            <div className="tw-fixed tw-top-0 tw-z-10 tw-text-black tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">

                <div className= " tw-flex  tw-flex-col tw-items-center tw-bg-slate-200  tw-mx-2 tw-p-8 tw-rounded-lg tw-w-full tw-h-4/6 md:tw-w-4/5 lg:tw-w-3/5 tw-opacity-100 ">
                    <div className='tw-mb-[5%] tw-w-full tw-flex tw-justify-end  '><a  href='/'> <Close></Close> </a></div>
                    <svg
                    className='  tw-pointer-events-none tw-text-gray-700 tw-dark:text-red-300'
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="40%"
                        width="40%"

                    >
                        <path d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1.6-.6 1.5-.7 2.1-.1.6.5.7 1.5.1 2.1z" />
                    </svg>
                    <span></span>
                    <div className="tw-flex tw-items-center tw-p-4 tw-mb-4 tw-text-sm tw-text-red-800 tw-border tw-border-red-300 tw-rounded-lg tw-bg-red-50 tw-dark:bg-gray-800 tw-dark:text-red-400 tw-dark:border-red-800" role="alert">
                        <svg className="tw-flex-shrink-0 tw-inline tw-w-4 tw-h-4 tw-me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="tw-sr-only">Info</span>
                        <div>
                            <span className="tw-font-medium">Necesitas iniciar sesion para poder utilizar esta funcionalidad </span>⚠️
                        </div>
                    </div>
                    <a href='/login' className='tw-mt-[5%] tw-bg-sky-400 tw-font-medium tw-transition-all hover:tw-brightness-90 hover:tw-scale-105 tw-rounded-md tw-tex tw-p-2 '>Loguearse </a>

                </div>
            </div>



        </>
    );
};

export default LoginRequiredModal;