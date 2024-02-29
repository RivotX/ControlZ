import React from 'react';

const LoginRequiredModal = () => {
    return (
        <>
            <div className="tw-fixed tw-top-0 tw-z-10 tw-text-black tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">

                <div className="tw-bg-white  tw-mx-2 tw-p-8 tw-rounded-lg tw-w-full tw-h-4/6 md:tw-w-4/5 lg:tw-w-3/5 tw-opacity-100 ">
                    <div className="tw-flex tw-items-center tw-p-4 tw-mb-4 tw-text-sm tw-text-red-800 tw-border tw-border-red-300 tw-rounded-lg tw-bg-red-50 tw-dark:bg-gray-800 tw-dark:text-red-400 tw-dark:border-red-800" role="alert">
                        <svg className="tw-flex-shrink-0 tw-inline tw-w-4 tw-h-4 tw-me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="tw-sr-only">Info</span>
                        <div>
                            <span className="tw-font-medium">Necesitas iniciar sesion para poder utilizar esta funcionalidad </span>⚠️
                        </div>
                    </div>
                    <a href='/login' className='tw-bg-blue-400 tw-rounded-md tw-w-20 tw-p-2 '>ir a login </a>

                </div>
            </div>



        </>
    );
};

export default LoginRequiredModal;
