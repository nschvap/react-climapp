function DataCard({title, value, icon}) {
  return (
    <div className="flex px-2 py-4 flex-col gap-y-4 justify-center items-center bg-white/20 min-w-[100px] h-[140px] rounded-lg relative">
        <span className="text-5xl text-zinc-900 h-[40px]">{icon}</span>
        <div className="flex flex-col justify-center items-center h-[100px]">
            <p className="text-sm font-semibold text-zinc-900 text-center leading-3 h-[10px] mb-3">{title}</p>
            <p className="mt-1 font-bold text-md text-center h-[15px]">{value}</p>
        </div>
    </div>
  )
}

export default DataCard