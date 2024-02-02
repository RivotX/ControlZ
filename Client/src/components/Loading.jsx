const Loading = () => {
    return (
        <div className="tw-h-1/2 tw-w-full tw-flex tw-justify-center tw-items-center ">
            <div
                className="tw-text-white tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:tw-animate-[spin_1.5s_linear_infinite]"
                role="status">
            </div>

        </div>
    )
}

export default Loading