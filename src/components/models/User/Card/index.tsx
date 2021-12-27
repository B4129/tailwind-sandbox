import React from 'react';

export const UserCard = ()=> {
    return (

        <>
            <div className="flex flex-row bg-gray-900 opacity-100 shadow rounded-2xl">
                <div className="flex-1 m-4 p-4">
                    <div className="grid grid-cols-4 gap-8 ">
                        <div className=" bg-gray-100 rounded-xl col-start-1 col-span-2 row-start-1 row-span-2  hover:shadow"></div>
                        <div className="bg-gray-100 rounded-full row-span-2"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>
                        <div className="bg-gray-100 rounded-3xl h-16"></div>

                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <div className="flex-1">
                    <div className=" text-transparent bg-clip-text bg-gradient-to-b via-gray-500 from-black ">
                        <section>
                            <p>こんにちは！！！！！！！！！！！！！！</p>
                            <p>私は丸丸株式会社にて１０９３０２１年勤務しており</p>
                            <p>得意分野はネットワークビジネスです</p>
                            <p>華恋の経歴と致しましては、</p>
                        </section>
                    </div>
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_13.jpg" className="bg-gradient-to-l opacity" />
                    <h1 className="font-extrabold text-transparent text-8xl text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-indigo-900">Scala</h1>
                    <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-l from-orange-400 ">Ruby</h1>
                </div>
            </div>
        </>

    );
}
