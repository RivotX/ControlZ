import cruzCerrar from "../img/cruzCerrar.png"
const FoodModal = ({ closeModal }) => {
    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">

            <div className="tw-bg-white  tw-mx-2 tw-p-8 tw-rounded-lg tw-w-full tw-h-4/5 md:tw-w-4/5 lg:tw-w-2/5 tw-opacity-100 ">
                <img onClick={closeModal} src={cruzCerrar} className="tw-fixed PosCruzModal tw-h-10 tw-cursor-pointer tw-right-0 " />
                <div className="tw-h-5/6">sd</div>
                <div className="tw-flex tw-justify-items-end tw-h-1/6">
                    <button className='tw-mt-3 tw-bg-yellow-300 tw-rounded-lg tw-p-2 tw-w-full text-s tw-h-full'>añadir Alimento</button>
                </div>
            </div>

        </div>
    );
};

export default FoodModal
