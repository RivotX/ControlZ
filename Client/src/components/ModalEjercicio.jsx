export default function ModalEjercicio({ modalvisible }) {
  return (
    <>{modalvisible&&
    <div className=" NegroOpacidad75 tw-fixed tw-left-0 tw-top-0 tw-z-[51] tw-flex tw-h-screen tw-w-screen tw-items-center tw-justify-center">
      <div className="tw-rounded-3xl tw-bg-slate-700 tw-h-[50%] tw-w-[50%] tw-py-4 tw-px-10">
        <div className="  tw-border-b tw-pb-4 tw-border-slate-400 tw-font-semibold tw-text-lg ">Añadir ejercicio</div>
      </div>
    </div>

    }</>
  );
}
