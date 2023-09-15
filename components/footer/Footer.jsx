// "use client"
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className="bg-stone-300 flex justify-between px-10 py-2 h-10 gap-6">
                <div className='flex'>
                    <Image
                        src="/next.svg"
                        width={150}
                        height={150}
                        className="w-200"
                        alt="Picture of the author"
                    />
                    <p className="w-full text-base text-center">
                        Подпишитесь на рассылку и будьте в курсе! Акции, скидки, распродажи ждут!
                    </p>
                </div>
                <input type="text" placeholder="Введите email" className="w-1/4 h-8 rounded-lg " />
                <button className="text-sm py-2 px-4 bg-red-600 rounded-lg">Подписатьса</button>
            </div>
            <div className="flex justify-between px-5 bg-stone-100">
                <div className="">
                    <div className="flex gap-10">
                        <div>
                            <span className="text-base font-medium">О компании</span>
                            <ul className="block">
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Реквизиты
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        О нас
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Информация для инвесторов
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Сертификаты
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Производители
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Правовая информация
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div>
                                <span className="text-base font-medium">Акции</span>
                                <ul>
                                    <li>
                                        <a href="#" className="hover:text-red-600 text-sm">
                                            Наши акции
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-7">
                                <span className="text-base font-medium ">Компаниям</span>
                                <ul>
                                    <li>
                                        <a href="#" className="hover:text-red-600 text-sm">
                                            Поставщикам
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-red-600 text-sm">
                                            Организациям
                                        </a>
                                    </li>
                                    <li>
                                     <a href="#" className="hover:text-red-600 text-sm">
                                            Франшиза
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className="text-base font-medium">Получение и оплата</span>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Доставка курьером
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Доставка транспортной <br /> компанией
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Информация для инвесторов
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Самовывоз
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Способы оплаты
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-base font-medium">Сервис и поддержка</span>
                            <ul>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Сервисный центр
                                        <br /> ВсеИнструменты.ру
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Обратная связь
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-red-600 text-sm">
                                        Помощь по работе с сайтом
                                    </a>
                                </li>
                                <li className="mt-6">
                                    <a href="#" className="hover:text-red-600 text-base font-medium">
                                        Работа у нас
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10">
                        <span className="">Давайте дружить</span>
                        <div className="flex mt-3 gap-2">
                            <img
                                className="w-10"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qXZChidikJt4_sI7L5xpzqCENSXiI-ie5g&usqp=CAU"
                                alt=""
                            />
                            <img
                                className="w-10"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qXZChidikJt4_sI7L5xpzqCENSXiI-ie5g&usqp=CAU"
                                alt=""
                            />
                            <img
                                className="w-10"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qXZChidikJt4_sI7L5xpzqCENSXiI-ie5g&usqp=CAU"
                                alt=""
                            />
                            <img
                                className="w-10"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qXZChidikJt4_sI7L5xpzqCENSXiI-ie5g&usqp=CAU"
                                alt=""
                            />
                            <img
                                className="w-10"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qXZChidikJt4_sI7L5xpzqCENSXiI-ie5g&usqp=CAU"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-xs">
                            Вы принимаете условия
                            <a href="#">политики в отношении обработки персональных данных</a> и
                            <a href="#">пользовательского соглашения</a> каждый раз, когда
                            оставляете
                            <br />
                            свои данные в любой форме обратной связи на сайте ВсеИнструменты.ру
                        </p>
                        <p className="text-xs mt-3">© 2006 — 2023. ВсеИнструменты.ру</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#" className="hover:text-red-600 text-base font-medium">
                                Работа у нас
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;