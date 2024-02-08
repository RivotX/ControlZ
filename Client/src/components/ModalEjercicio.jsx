import Close from "./Close";

export default function ModalEjercicio({
   modalvisible,
   setmodalvisible,
   funcionañadir,
   }) {
  return (
    <>
      {modalvisible && (
        <div className=" NegroOpacidad75 tw-fixed tw-left-0 tw-top-0 tw-z-[51] tw-flex tw-h-screen tw-w-screen tw-items-center tw-justify-center">
          <div className="tw-h-[80%] tw-w-[80%] tw-rounded-3xl tw-bg-slate-700 tw-px-10 tw-py-4 md:tw-h-[50%] md:tw-w-[50%]">
            <div className="  tw-flex tw-justify-between  tw-border-b tw-border-slate-400 tw-pb-4 tw-text-center tw-text-lg tw-font-semibold  ">
              Añadir ejercicio
              <div
                className="botoncerrar  tw-w-2/12"
                onClick={() => {
                  setmodalvisible(false);
                }}
              >
                <Close></Close>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
