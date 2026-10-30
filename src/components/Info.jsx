function Info({score, bestScore}) {
    return(
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-wrap mb-6 -mx-3 border-gray-200 border ">
                <h1 className="mx-auto font-sans text-sky-700 font-bold px-4 uppercase text-xl -mt-4 bg-white">
                    Information
                </h1>
                <p className="my-5 w-full text-center">You gain one point whenever you click on a image just once. if you click on one image more than once you lost the round</p>
                <div className="flex gap-8 mx-auto mb-8">
                  <div className="bg-green-400 rounded-2xl px-5 py-3 text-gray-700">Score: {score}</div>
                  <div className="bg-orange-400 rounded-2xl px-5 py-3 text-white">Best Score: {bestScore}</div>
                </div>
            </div>
        </div>
    )
}

export { Info };
