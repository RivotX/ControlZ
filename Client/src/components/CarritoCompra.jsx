import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import proteinaPolvo from "../img/proteinaPolvo.png"
import barraProteina from "../img/barraProteina.png"
import axios from "axios";

export default function CarritoCompra({ refreshsession, visible, onClose, setNumeroItems }) {

  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState();

  const sessions = () => {
    axios.get("http://localhost:8081/getSession", {
      withCredentials: true,
    }).then((res) => {
      setUsername(res.data.usuario || null);
      setProducts(res.data.carrito || []);
    }).catch((error) => {
      console.error(error);
    });
  }


  useEffect(() => {

    sessions();
    console.log("refreshsession existe")


  }, [refreshsession]);

  useEffect(() => {
    sessions();
    console.log(refreshsession)
  }, []);



  const [Loading, setLoading] = useState(false);
  const [pricetotal, setPricetotal] = useState(0);



  useEffect(() => {
    const total = products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    setPricetotal(total);
  }, [products]);


  const handleRemove = (productToRemove) => {
    productToRemove.quantity = 1;
    setLoading(true);
    axios.post("http://localhost:8081/removeToCart", {
      producto: productToRemove,
    }, {
      withCredentials: true,
    }).then((res) => {
      setLoading(false);
      sessions();
    }).catch((error) => {
      console.error(error);
    });
  };


  useEffect(() => {
    setNumeroItems(products.length);
  }, [products]);

  return (
    <>
      {Loading && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-[99.5%] tw-flex tw-items-center tw-justify-center tw-z-[99999999999999]">
          <div className="tw-w-32 tw-h-32 tw-border-8 tw-border-t-8 tw-border-t-blue-500 tw-border-gray-200 tw-rounded-full tw-animate-spin"></div>
        </div>
      )}
      <Transition.Root show={visible} as={Fragment}>
        <Dialog as="div" className="tw-relative tw-z-10 " onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="tw-ease-in-out tw-duration-500"
            enterFrom="tw-opacity-0"
            enterTo="tw-opacity-100"
            leave="tw-ease-in-out tw-duration-500"
            leaveFrom="tw-opacity-100"
            leaveTo="tw-opacity-0"
          >
            <div className="tw-fixed tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" />
          </Transition.Child>

          <div className="tw-fixed tw-inset-0 tw-overflow-hidden">
            <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
              <div className="tw-pointer-events-none tw-fixed tw-inset-y-0 tw-right-0 tw-flex tw-max-w-full tw-pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="tw-transform tw-transition tw-ease-in-out tw-duration-500 tw-sm:tw-duration-700"
                  enterFrom="tw-translate-x-full"
                  enterTo="tw-translate-x-0"
                  leave="tw-transform tw-transition tw-ease-in-out tw-duration-500 tw-sm:tw-duration-700"
                  leaveFrom="tw-translate-x-0"
                  leaveTo="tw-translate-x-full"
                >
                  <Dialog.Panel className="tw-pointer-events-auto tw-w-screen tw-max-w-md">
                    <div className="tw-flex tw-mt-[4.9rem]  tw-pt-0 tw-h-full tw-flex-col tw-overflow-y-scroll tw-bg-white tw-shadow-xl">
                      {username == null && (
                        <div className="tw-flex tw-flex-col tw-absolute justify-content-center tw-bg-black tw-bg-opacity-40  tw-h-full tw-w-full">
                          <div className='tw-absolute tw-flex tw-justify-center tw-items-center tw-h-[50px] tw-w-[92%]  tw-top-[35%]'>
                            <svg
                              className=' tw-w-full tw-h-full  tw-pointer-events-none tw-text-gray-700 tw-dark:text-red-300'
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              height="40%"
                              width="40%"

                            >
                              <path d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1.6-.6 1.5-.7 2.1-.1.6.5.7 1.5.1 2.1z" />
                            </svg>
                          </div>
                          <div className="tw-flex tw-justify-center tw-items-center tw-h-20 tw-w-[92%] tw-bg-red-500 tw-text-white">
                            <p>Para añadir productos al carrito debes <a className='tw-font-semibold tw-underline' href='/login'>iniciar sesión</a></p>
                          </div>
                        </div>

                      )}
                      <div className="tw-flex-1 tw-overflow-y-auto tw-px-4 tw-pb-6 tw-pt-3 tw-sm:tw-px-6">
                        <div className="tw-flex tw-items-start tw-justify-between">
                          <Dialog.Title className="tw-text-lg tw-font-medium tw-text-gray-900">
                            Carrito de la compra
                          </Dialog.Title>
                          <div className="tw-ml-3 tw-flex tw-h-7 tw-items-center">
                            <button
                              type="button"
                              className="tw-relative tw--m-2 tw-p-2 tw-text-gray-400 tw-hover:text-gray-500"
                              onClick={onClose}
                            >
                              <span className="tw-absolute tw--inset-0.5" />
                              <span className="tw-sr-only">Close panel</span>
                              <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="">
                          <div className="tw-flow-root">
                            <ul role="list" className=" tw-divide-y tw-divide-gray-200">
                              {products.length > 0 ? products.map((product) => (
                                <li key={product.id} className="tw-flex tw-py-4"> {/*cambio*/}
                                  <div className=" tw-w-[38%] tw-flex-shrink-0 tw-overflow-hidden tw-rounded-md tw-border tw-border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                                    />
                                  </div>

                                  <div className="tw-ml-4 tw-flex tw-flex-1 tw-flex-col">
                                    <div>
                                      <div className="tw-flex tw-justify-between tw-text-base tw-font-medium tw-text-gray-900">
                                        <h3>
                                          <a href={"/tienda"}>{product.name}</a>
                                        </h3>
                                        <p className="tw-ml-4">${product.price}€</p>
                                      </div>
                                    </div>
                                    <div className="tw-flex tw-flex-1 tw-items-end tw-justify-between tw-text-sm">
                                      <p className="tw-text-gray-500">Cantidad: {product.quantity}</p>

                                      <div className="tw-flex">
                                        <button
                                          type="button"
                                          className="tw-font-medium tw-text-indigo-600 tw-hover:text-indigo-500"
                                          onClick={() => handleRemove(product)}
                                        >
                                          Remove
                                        </button>

                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                                : <p>No hay productos en el carrito</p>}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="tw-border-t alturaResp tw-border-gray-200 tw-px-4 tw-py-6">
                        <div className="tw-flex tw-justify-between tw-text-base tw-font-medium tw-text-gray-900">
                          <p>Total</p>
                          <p>${pricetotal}</p>
                        </div>
                        <p className="tw-mt-0.5 tw-text-sm tw-text-gray-500">
                          Gastos de envio + IVA incluidos
                        </p>
                        <div className="tw-mt-4">
                          <a
                            href="#"
                            className="tw-flex tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-px-6 tw-py-3 tw-text-base tw-font-medium tw-text-white tw-shadow-sm tw-hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="tw-mt-3 tw-flex tw-justify-center tw-text-center tw-text-sm tw-text-gray-500 ">
                          <p>
                            <button
                              type="button"
                              className="tw-font-medium tw-text-indigo-600 tw-hover:text-indigo-500"
                              onClick={onClose}
                            >
                              Continuar comprando
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root></>
  );
}
