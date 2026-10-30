function GifsGrid ({ data, callback }) {
    return(
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto" >
          {data.map((gif) => (
            <div onClick={() => callback(gif.id)} key={gif.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <img className="object-cover h-65 w-full hover:opacity-75"
                src={gif.images.fixed_width.url} alt={gif.title || "gif"} />
            </div>
          ))}
        </div>
    )
}

export { GifsGrid };