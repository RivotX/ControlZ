import React from 'react';

const LoginRequiredModal = () => {
    return (
        <>
            <div className="tw-fixed tw-top-0 tw-z-10 tw-text-black tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">

                <div className="tw-bg-white  tw-mx-2 tw-p-8 tw-rounded-lg tw-w-full tw-h-4/6 md:tw-w-4/5 lg:tw-w-3/5 tw-opacity-100 ">
                    logueate mamahuevo gonorrea
                    <a href='/login' className='tw-bg-blue-400 tw-rounded-md tw-w-20 tw-p-2 tw-ms-10'>ir a login </a>

                </div>
            </div>



        </>
    );
};

export default LoginRequiredModal;
