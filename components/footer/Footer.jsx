// "use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bottom-0">
            <div className="bg-stone-300 flex justify-between px-[3%] py-2 h-10 gap-6">
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
            <div className="flex justify-between px-[3%] bg-stone-100">
                <div className="">
                    <div className="flex gap-10">
                        <div>
                            <span className="text-base font-medium">О компании</span>
                            <ul className="block">
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Реквизиты
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        О нас
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Информация для инвесторов
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Сертификаты
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Производители
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Правовая информация
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="block">
                            <div>
                                <span className="text-base font-medium">Акции</span>
                                <ul>
                                    <li>
                                        <Link href="#" className="hover:text-red-600 text-sm">
                                            Наши акции
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-7">
                                <span className="text-base font-medium ">Компаниям</span>
                                <ul>
                                    <li>
                                        <Link href="#" className="hover:text-red-600 text-sm">
                                            Поставщикам
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-red-600 text-sm">
                                            Организациям
                                        </Link>
                                    </li>
                                    <li>
                                     <Link href="#" className="hover:text-red-600 text-sm">
                                            Франшиза
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <span className="text-base font-medium">Получение и оплата</span>
                            <ul>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Доставка курьером
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Доставка транспортной <br /> компанией
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Информация для инвесторов
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Самовывоз
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Способы оплаты
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-base font-medium">Сервис и поддержка</span>
                            <ul>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Сервисный центр
                                        <br /> ВсеИнструменты.ру
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Обратная связь
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-red-600 text-sm">
                                        Помощь по работе с сайтом
                                    </Link>
                                </li>
                                <li className="mt-6">
                                    <Link href="#" className="hover:text-red-600 text-base font-medium">
                                        Работа у нас
                                    </Link>
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
                            <Link href="#">политики в отношении обработки персональных данных</Link> и
                            <Link href="#">пользовательского соглашения</Link> каждый раз, когда
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
                            <Link href="#" className="hover:text-red-600 text-base font-medium">
                                Работа у нас
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;